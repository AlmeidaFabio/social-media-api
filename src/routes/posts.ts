import { Router } from "express";
import { Auth } from "../middlewares/Auth";
import multer from 'multer'
import Upload from "../middlewares/Upload";
import * as posts from "../controllers/postControllers"

const auth = new Auth()

const router = Router()

router.post('/add', auth.private, multer(Upload).single('photo'), posts.createPostController.createPost as any)

export default router