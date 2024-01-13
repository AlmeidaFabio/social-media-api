import { RequestHandler } from "express";
import { z } from "zod";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserUpdateData } from "../../types/UpdateData";
import { userServices } from "../../services";

export class ChangeUserPasswordController {
    updatePass:RequestHandler = async (req, res) => {
        const token = req.headers.authorization

        const changePasswordSchema = z.object({
            password: z.any(),
            password_confirm: z.any()
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

            const body = changePasswordSchema.safeParse(req.body)

            if(!body.success) {
                return res.status(400).json({error: 'Dados inválidos'})
            }

            if(body.data.password === body.data.password_confirm) {
                const hash = await bcrypt.hash(body.data.password.toString(), 10);
                const data: UserUpdateData = {
                    password: hash
                }

                const user = await userServices.editUser.execute(userId as string, data)

                return res.status(201).json(user)
            } else {
                return res.status(400).json({error: 'passwords do not match'});
            }
        } catch (error) {
            throw new Error(`Error in ChangeUserPasswordController: ${error}`)
        }
    }
}