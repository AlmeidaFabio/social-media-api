import { RequestHandler } from "express";
import { postServices } from "../../services";

export class GetPostCommentsController {
    constructor() {}

    getComments:RequestHandler = async (req, res) => {
        const postId = req.params.id

        try {
            const post = await postServices.findPostById.execute(postId)

            if(post) {
                const comments = await postServices.getCommentsByPostId.execute(postId)

                return res.status(200).json(comments)
            } else {
                return res.status(400).json({error: 'Post not found'})
            }
        } catch (error) {
            return res.status(400).json({error: `Error in GetPostCommentsController: ${error}`})
        }
    }
}