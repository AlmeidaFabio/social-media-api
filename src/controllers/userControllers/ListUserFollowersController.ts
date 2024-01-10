import { RequestHandler } from "express"
import jwt from 'jsonwebtoken';
import { userServices } from "../../services";

export class ListUserFollowersController {
    listFollowers: RequestHandler = async (req, res) => {
        const token = req.headers.authorization
        let id = req.params.id

        try {
            if (!token) {
                return res.status(400).json({ error: 'Unauthorized.' })
            }
            
            const loggedUser = jwt.decode(token)

            if (!loggedUser) {
                return res.status(400).json({ error: 'Unauthorized.' })
            }

            const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];
            
            if(!id) {
                id = userId as string
            }

            const followers:string[] = []

            const userExists = await userServices.findById.execute(id)

            if(!userExists) {
                return res.status(400).json({error: 'User not found'});
            }

            const followersList = await userServices.listUserFollowers.execute(id)
            followersList.map(item => {
                followers.push(item.userFrom)
            })
            return res.status(200).json(followers)
        } catch (error) {
            throw new Error(`Error in ListUserFollowersController: ${error}`)
        }
    }
}