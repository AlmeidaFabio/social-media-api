import { Router } from "express";
import * as users from "../controllers/userControllers";
import * as images from "../controllers/uploadControllers"
import { Auth } from "../middlewares/Auth";
import multer from 'multer'
import Upload from "../middlewares/Upload";

const auth = new Auth()

const router = Router()

router.post('/signup', users.createController.create)

router.post('/login', users.authController.login)

router.post('/avatar', auth.private, multer(Upload).single('avatar'), images.uploadImageController.uploadImage as any)

router.post('/cover', auth.private, multer(Upload).single('cover'), images.uploadImageController.uploadImage as any)

router.get('/', auth.private, users.getUserController.read)

router.get('/feed', auth.private, users.userFeedController.getUserFeed)

router.get('/feed/:id', auth.private, users.userFeedController.getUserFeed)

router.get('/follow/:id', auth.private, users.userFollowController.follow)

router.get('/followers', auth.private, users.listUserFollowersController.listFollowers)

router.get('/followers/:id', auth.private, users.listUserFollowersController.listFollowers)

router.get('/following', auth.private, users.listUserFollowingsController.listFollowings)

router.get('/following/:id', auth.private, users.listUserFollowingsController.listFollowings)

router.get('/:id', auth.private, users.getUserController.read)


export default router