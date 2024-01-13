import { RequestHandler } from "express";
import jwt from 'jsonwebtoken'
import { postServices } from "../../services";

export class UserFeedController {
    getUserFeed: RequestHandler = async (req, res) => {
        const id = req.params.id
        const token = req.headers.authorization
        const { page = 1, limit = 8 } = req.query

        try {
            if (id) {
                const result = await postServices.listPostsByUserId.execute(id, page.toString(), limit.toString())

                const postList = result
                const total = result.length
                const pageCount = Math.ceil(total / parseInt(limit.toString()));

                return res.status(200).json({
                    posts: postList,
                    pageCount,
                    currentPage: page
                })
            } else {
                if(token) {
                    const loggedUser = jwt.decode(token)
                    if(loggedUser) {
                        const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

                        const result = await postServices.listPostsByUserId.execute(userId as string, page.toString(), limit.toString())

                        const postList = result
                        const total = result.length
                        const pageCount = Math.ceil(total / parseInt(limit.toString()));
        
                        return res.status(200).json({
                            posts: postList,
                            pageCount,
                            currentPage: page
                        })
                    } else {
                        return res.status(400).json({ error: 'Unauthorized.' })
                    }
                } else {
                    return res.status(400).json({ error: 'Unauthorized.' })
                }              
            }
        } catch (error) {
            throw new Error(`Error in UserFeedController: ${error}`)
        }
    }
}