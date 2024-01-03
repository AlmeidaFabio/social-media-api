import { Router } from "express";
import * as users from "../controllers/userControllers";
import { Auth } from "../middlewares/Auth";
import multer from 'multer'

const auth = new Auth()

const router = Router()

router.post('/users', users.createController.create)
router.post('/users/login', users.authController.login)

export default router