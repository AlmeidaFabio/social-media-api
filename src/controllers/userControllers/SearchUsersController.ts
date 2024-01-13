import { RequestHandler } from "express";
import { z } from "zod";
import { userServices } from "../../services";

export class SearchUsersController {
    search:RequestHandler = async (req, res) => { 
        const searchSchema = z.object({
            txt: z.string()
        })

        try {
            const body = searchSchema.safeParse(req.body)

            if(!body.success) {
                return res.status(400).json({error: 'Invalid data'})
            }

            if(body.data.txt == '') {
                return res.status(400).json({error: 'type something to search'})
            }

            const result = await userServices.searchUsers.execute(body.data.txt)

            return res.status(200).json(result)
        } catch (error) {
            throw new Error(`Error in SearchUsersController: ${error}`)
        }
    }
}