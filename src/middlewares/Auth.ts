import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';

export class Auth {
    private:RequestHandler = async(req, res, next) => {
        try {
            if(!req.headers.authorization) {
                return res.json({notAllowed: true})
            }
            let token = ''
            if(req.headers.authorization) {
                token = req.headers.authorization
            }
            if(token == '') {
                return res.json({notAllowed: true})
            }
            if(!process.env.SECRET_KEY) {
                return res.json({error: 'Secret key is not defined in the environment variables.'})
            } else {
                jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                    if(err) return res.status(401).json({error: 'Invalid Token'})
                })
                next()
            }
        } catch (error:any) {
            return res.status(500).json({error: `Error in Auth:private: ${error.message}`})
        }
    }
}