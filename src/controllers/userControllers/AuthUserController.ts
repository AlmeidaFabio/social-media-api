import { RequestHandler } from "express";
import { z } from "zod";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userServices } from "../../services";

export class AuthUserController {
    constructor() {
        this.login = this.login.bind(this)
    }

    login:RequestHandler = async (req, res) =>  {
        const loginUserScheema = z.object({ 
            email: z.string().email(),
            password: z.any(),
        })
        
        try {
            const body = loginUserScheema.safeParse(req.body)
            
            if(!body.success) {
                return res.status(400).json({error: 'Invalid data'})
            }
            const user = await userServices.findByEmail.execute(body.data.email)

            if(!user) {
                return {error: 'User does not exists!'};
            }

            if(!await bcrypt.compare(body.data.password.toString(), user.password)) {
                return {error: 'Invalid password!'};
            }

            if(!process.env.SECRET_KEY) {
                console.error("Secret key is not defined in the environment variables.");
                return {error: 'Secret key is not defined in the environment variables.'};
            } else {
                const token = jwt.sign({ id:user.id }, process.env.SECRET_KEY, {
                    expiresIn:86400
                });

                return res.status(200).json({
                    loggedUser: {
                        id: user.id,
                        token
                    }
                })
            }

        } catch (error:any) {
            return res.status(400).json(`Error in AuthUserController: ${error.message}`)
        }
    }
}