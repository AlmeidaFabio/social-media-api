import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { postServices } from "../../services";
import { LikeCreateData } from "../../types/CreateData";

export class SetLikedController {
    constructor(){}

    setLiked:RequestHandler = async (req, res) => {
        const postId = req.params.id
        const token = req.headers.authorization
        try {
            if(!token) {
                return res.status(400).json({error: 'Unauthorized!'})
            }

            const loggedUser = jwt.decode(token)

            if(!loggedUser) {
                return res.status(400).json({error: 'Unauthorized!'})
            }

            const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

            const post = await postServices.findPostById.execute(postId)

            if(!post) {
                return res.status(400).json({error: 'Post not found'})
            }

            const isLiked = await postServices.getLikeByPostAndUserId.execute(post.id, userId)

            if(isLiked) {
                await postServices.removeLiked.execute(isLiked.id)
                return res.json({isLiked: false})
            } else {
                const data: LikeCreateData = {
                    postId: post.id,
                    userId: userId as string
                }

                await postServices.setLiked.execute(data)
                return res.json({isLiked: true})
            }
            
        } catch (error:any) {
            return res.status(400).json({error: `Error i SetLikedController: ${error}`})
        }
    }
}