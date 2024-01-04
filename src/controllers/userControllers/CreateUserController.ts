import { RequestHandler } from "express";
import { userServices } from '../../services'
import bcrypt from 'bcrypt';
import { z } from  'zod'
import { UserCreateData } from "../../types/CreateData";

export class CreateUserController {
    constructor() {
        this.create = this.create.bind(this)
    }

    create:RequestHandler = async (req, res) => {
        const createUserScheema = z.object({ 
            firstName: z.string(),
            lastName: z.string(),
            email: z.string().email(),
            password: z.any(),
            birthdate: z.string()
        })

        try {
            const body = createUserScheema.safeParse(req.body)
            
            if(!body.success) {
                return res.status(400).json({error: 'Dados inválidos'})
            }

            const userExists = await userServices.findByEmail.execute(body.data.email)
            if(userExists) {
                return res.status(400).json({error: 'User already exists'});
            }

            const hash = await bcrypt.hash(body.data.password.toString(), 10);

            const data: UserCreateData = {
                ...body.data,
                password: hash
            }
            
            const newUser = await userServices.signup.execute(data)

            return res.status(201).json(newUser)
        } catch (error:any) {
            return res.status(400).json(`Error in CreateUserController: ${error.message}`)
        }
    }
}