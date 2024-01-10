import { RequestHandler } from "express"
import jwt from 'jsonwebtoken';
import { userServices } from "../../services";

export class ListUserFollowingsController {
    listFollowings:RequestHandler = async (req, res) => {
        let id = req.params.id
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

            if(!id) {
                id = userId as string
            }

            const following: string[] = []

            const userExists = await userServices.findById.execute(id)

            if(!userExists) {
                return res.status(400).json({error: 'User not found'});
            }

            const followingList = await userServices.listUserFollowings.execute(id)
            followingList.map(item => {
                following.push(item.userTo)
            })
            
            return res.status(200).json(following)

        } catch (error) {
            throw new Error(`Error in ListUserFollowingsController: ${error}`)
        }
    }
}