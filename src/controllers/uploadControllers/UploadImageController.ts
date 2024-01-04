import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import sharp from "sharp";
import { unlink } from 'fs/promises'
import { AvatarCreateData, CoverCreateData } from "../../types/CreateData";
import { uploadServices } from "../../services";

interface MulterRequest extends Request {
    file: any;
}

export class UploadImageController {
    constructor() {
        this.uploadImage = this.uploadImage.bind(this)
    }

    uploadImage = async (req: MulterRequest, res: Response) => {
        const { filename, originalname, fieldname, path } = req.file
        const token = req.headers.authorization

        try {
            if (token) {
                const loggedUser = jwt.decode(token)

                if (loggedUser) {
                    const userId = typeof loggedUser === 'string' ? loggedUser : loggedUser['id'];

                    if (req.file.fieldname === 'avatar') {
                        const data: AvatarCreateData = {
                            fileName: filename,
                            originalName: originalname,
                            url: `${process.env.BASE_URL}:${process.env.PORT}/public/images/${fieldname}s/${filename}`,
                            userId: userId as string
                        }

                        await sharp(path)
                            .resize(300)
                            .toFormat('jpeg')
                            .toFile(`./public/images/${fieldname}s/${filename}`);
                        // await unlink(path); TODO: fix the permission error

                        const newAvatar = await uploadServices.uploadAvatar.execute(data)

                        return res.status(201).json(newAvatar);
                    }
                    if (req.file.fieldname === 'cover') {
                        const data: CoverCreateData = {
                            fileName: filename,
                            originalName: originalname,
                            url: `${process.env.BASE_URL}:${process.env.PORT}/public/images/${fieldname}s/${filename}`,
                            userId: userId as string
                        }

                        await sharp(path)
                            .resize({
                                fit: sharp.fit.contain,
                                width: 800
                            })
                            .toFormat('jpeg')
                            .toFile(`./public/images/${fieldname}s/${filename}`);
                        // await unlink(path); TODO: fix the permission error

                        const newCover = await uploadServices.uploadCover.execute(data)

                        return res.status(201).json(newCover);
                    }
                }
            } else {
                return res.status(400).json({ error: `Unauthorized!!` })
            }
        } catch (error: any) {
            return res.status(400).json({ error: `Error in UploadImageController: ${error.message}` })
        }
    }
}