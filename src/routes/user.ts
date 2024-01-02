import { Router } from "express";
import * as users from "../controllers/userControllers";

const router = Router()

router.post('/users', users.createController.create)
router.post('/users/login', users.authController.login)

export default router