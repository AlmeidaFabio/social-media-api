import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { userServices } from "../../services";

export class GetUserPhotosController {
    constructor() {}

    getPhotos:RequestHandler = async (req, res) => {
        let id = req.params.id
        const token = req.headers.authorization
        const { page = 1, limit = 16 } = req.query

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

            const result = await userServices.getUserPhotos.execute(id, page.toString(), limit.toString())
            
            const total = result.length
            const pageCount = Math.ceil(total / parseInt(limit.toString()));

            return res.status(200).json({
                photos: result,
                photoCount: result.length,              
                pageCount,
                currentPage: page
            })

        } catch (error) {
            throw new Error(`Error in GetUserPhotosController: ${error}`)
        }
    }
}