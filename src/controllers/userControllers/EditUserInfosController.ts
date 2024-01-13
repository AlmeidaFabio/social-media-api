import { RequestHandler } from "express";
import { date, z } from  'zod'
import jwt from 'jsonwebtoken';
import { userServices } from "../../services";

export class EditUserInfosController {
    editInfos:RequestHandler = async (req, res) => {
        const token = req.headers.authorization

        const editUserInfosScheema = z.object({ 
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            birthdate: z.string().optional(),
            city: z.string().optional(),
            work: z.string().optional()           
        })

        try {
            if(!token) {
                return res.status(400).json({error: 'Unauthorized.'})
            }

            const loggedUser = jwt.decode(token)

            if (!loggedUser) { 
                return res.status(400).json({error: 'Unauthorized.'})
            }

            const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

            const body = editUserInfosScheema.safeParse(req.body)

            if(!body.success) {
                return res.status(400).json({error: 'Dados inválidos'})
            }

            const updatedUser = await userServices.editUser.execute(userId as string, body.data)

            if(updatedUser) {
                const user = await userServices.findById.execute(updatedUser.id)

                return res.status(201).json(user)
            }

            return res.status(400).json('An error has occurred!!')

        } catch (error) {
            throw new Error(`Error in EditUserInfosController: ${error}`)
        }
    }
}