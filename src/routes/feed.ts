import { Router } from "express";
import { Auth } from "../middlewares/Auth";
import { feedController } from "../controllers/feedControllers";

const auth = new Auth()

const router = Router()

router.get('/', auth.private, feedController.getFeed)

export default router