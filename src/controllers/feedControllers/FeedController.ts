import { RequestHandler } from "express";
import jwt from 'jsonwebtoken'
import { postServices, userServices } from "../../services";

export class FeedController {
    constructor() {}

    getFeed:RequestHandler = async (req, res) => {
        const token = req.headers.authorization
        const { page = 1, limit = 8 } = req.query

        try {
            const users = []

            if(!token) {
                return res.status(400).json({error: 'Unauthorized.'})
            }

            const loggedUser = jwt.decode(token)

            if (!loggedUser) { 
                return res.status(400).json({error: 'Unauthorized.'})
            }

            const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

            const userList = await userServices.listUserFollowings.execute(userId as string)

            userList.map(item => {
                users.push(item.userTo)
            })

            users.push(userId as string)

            for(let id of users) {
                const result = await postServices.listPostsByUserId.execute(id, page.toString(), limit.toString())

                const postList = result
                const total = result.length
                const pageCount = Math.ceil(total / parseInt(limit.toString()));

                return res.status(200).json({
                    posts: postList,
                    pageCount,
                    currentPage: page
                })
            }

        } catch (error) {
            throw new Error(`Error in FeedController: ${error}`)
        }
    }
}