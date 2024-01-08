import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { postServices } from "../../services";
import { CommentCreateData } from "../../types/CreateData";

export class PostCommentController {
    constructor() {}

    comment:RequestHandler = async (req, res) => {
        const postId = req.params.id
        const { body } = req.body
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

            if(!body) {
                return res.status(400).json({error: 'No text'})
            }

            const data: CommentCreateData = {
                postId,
                userId: userId as string,
                body
            }

            const comment = await postServices.comment.execute(data)

            return res.status(200).json(comment)
        } catch (error) {
            return res.status(400).json({error: `Error in PostCommentController: ${error}`})
        }
    }
}