import { RequestHandler } from "express";
import { userServices } from '../../services'
import jwt from 'jsonwebtoken';

export class GetUserController { 
    read:RequestHandler = async (req, res) => {
        const id = req.params.id
        const token = req.headers.authorization
        try {
            if(id) {
                const user = await userServices.findById.execute(id)
                return res.status(200).json(user);
            } else {
                if(token) {
                    const loggedUser = jwt.decode(token)
                    
                    if(loggedUser) {
                        const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

                        const user = await userServices.findById.execute(userId as string)
                        
                        return res.status(200).json(user);
                    } else {
                        return res.status(400).json({ error: `Unauthorized!!` })
                    }
                } else {
                    return res.status(400).json({ error: `Unauthorized!!` })
                }
            }
        } catch (error: any) {
            return res.status(400).json({ error: `Error in GetUserController: ${error.message}` })
        }
    }
}