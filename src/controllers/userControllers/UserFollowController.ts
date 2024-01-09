import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { userServices } from "../../services";
import { RelationCreateData } from "../../types/CreateData";

export class UserFollowController {
    follow:RequestHandler = async (req, res) => {
        const id = req.params.id
        const token = req.headers.authorization

        try {
            if(!token) {
                return res.status(400).json({error: 'Unauthorized.'})
            }

            const loggedUser = jwt.decode(token)

            if (!loggedUser) { 
                return res.status(400).json({error: 'Unauthorized.'})
            }

            const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

            if(id === userId as string) {
                return res.status(400).json({ error: 'Cannot follow yourself' });
            }

            const relation = await userServices.getUserRelation.execute(userId as string, id)

            if(relation) {
                await userServices.deleteUserRelation.execute(relation.id)
                return res.status(200).json({isFollowing: false})
            } else {
                const data:RelationCreateData = {
                    userFrom: userId as string,
                    userTo: id
                }
                await userServices.createRelation.execute(data)
                return res.status(200).json({isFollowing: true})
            }
                
        } catch (error) {
            throw new Error(`Error in UserFollowController: ${error}`)
        }
    }
} 