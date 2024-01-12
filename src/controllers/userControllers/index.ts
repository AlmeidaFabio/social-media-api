import { AuthUserController } from "./AuthUserController";
import { CreateUserController } from "./CreateUserController";
import { GetUserController } from "./GetUserController";
import { GetUserPhotosController } from "./GetUserPhotosController";
import { ListUserFollowersController } from "./ListUserFollowersController";
import { ListUserFollowingsController } from "./ListUserFollowingsController";
import { UserFeedController } from "./UserFeedController";
import { UserFollowController } from "./UserFollowController";

const createController = new CreateUserController()
const authController = new AuthUserController()
const getUserController = new GetUserController()
const userFollowController = new UserFollowController()
const listUserFollowersController = new ListUserFollowersController()
const listUserFollowingsController = new ListUserFollowingsController()
const userFeedController = new UserFeedController()
const getUserPhotosController = new GetUserPhotosController()

export {
    createController,
    authController,
    getUserController,
    userFollowController,
    listUserFollowingsController,
    listUserFollowersController,
    userFeedController,
    getUserPhotosController
}