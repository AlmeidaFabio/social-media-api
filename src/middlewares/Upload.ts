import * as multer from 'multer'
import path from 'path';
import crypto from 'crypto'
import { Request } from 'express';

interface StorageTypes {
    [key: string]: multer.StorageEngine;
}

const uploadFolder = (fieldname: string) => {
    return path.resolve(__dirname, '..', '..', 'tmp')
}

const storageTypes: StorageTypes = {
    local: multer.diskStorage({
        destination: (req:Request, file: Express.Multer.File, cb) => {
            cb(null, uploadFolder(file.fieldname))
        },
        filename: (req:Request, file:Express.Multer.File, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(null, err.message)

                file.filename = `${hash.toString('hex')}${file.mimetype.replace('image/', '.')}`

                cb(null, file.filename)
            })
        }
    })
}

export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: process.env.STORAGE_TYPES ? storageTypes[process.env.STORAGE_TYPES] : undefined,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        const allowedMimes = [
            "image/jpeg",
            "image/jpg",
            "image/png"
        ]
        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("invalid file type."))
        }
    }
}