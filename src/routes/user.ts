import { Router } from "express";
import * as users from "../controllers/userControllers";
import * as images from "../controllers/uploadControllers"
import { Auth } from "../middlewares/Auth";
import multer from 'multer'
import Upload from "../middlewares/Upload";

const auth = new Auth()

const router = Router()

router.post('/users', users.createController.create)
router.post('/users/login', users.authController.login)
router.post('/users/avatar', auth.private, multer(Upload).single('avatar'), images.uploadImageController.uploadImage as any)
router.post('/users/cover', auth.private, multer(Upload).single('cover'), images.uploadImageController.uploadImage as any)

export default router