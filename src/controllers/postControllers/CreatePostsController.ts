import { Request, Response } from "express"
import jwt from 'jsonwebtoken';
import sharp from "sharp";
import { unlink } from 'fs/promises'
import { postServices, uploadServices } from "../../services";
import { PhotoCreateData, PostCreateData } from "../../types/CreateData";

interface MulterRequest extends Request {
    file: any;
}

export class CreatePostsController {
    constructor() {}

    createPost = async (req: MulterRequest, res: Response) => {
        const { type, body, legend } = req.body
        const token = req.headers.authorization

        try {
            if(token) {
                const loggedUser = jwt.decode(token);
                if(loggedUser) {
                    const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

                    if(req.file && type === 'photo') {
                        const { originalname, filename, path, fieldname } = req.file

                        const img: PhotoCreateData = {
                            fileName: filename,
                            originalName: originalname,
                            url: `${process.env.BASE_URL}:${process.env.PORT}/public/images/${fieldname}s/${filename}`,
                            userId: userId as string
                        }

                        await sharp(path)
                            .resize({
                                fit: sharp.fit.contain,
                                width: 500
                            })
                            .toFormat('jpeg')
                            .toFile(`./public/images/${fieldname}s/${filename}`);
                        // await unlink(path); TODO: fix the permission error

                        await uploadServices.uploadPhoto.execute(img)

                        const data:PostCreateData = {
                            userId: userId as string,
                            body: img.url,
                            legend,
                            type
                        }

                        const newPost = await postServices.createPost.execute(data)

                        return res.status(201).json(newPost)

                    } else if(type === 'text') {
                        const data: PostCreateData = {
                            userId: userId as string,
                            body,
                            type
                        }

                        const newPost = await postServices.createPost.execute(data)

                        return res.status(201).json(newPost)
                    }
                } else {
                    return res.status(400).json({ error: `Unauthorized!!` })
                }
            } else {
                return res.status(400).json({ error: `Unauthorized!!` })
            }
        } catch (error:any) {
            return res.status(400).json({ error: `Error in CreatePostController: ${error.message}` })
        }
    }
}