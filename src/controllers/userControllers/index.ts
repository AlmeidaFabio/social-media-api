import { AuthUserController } from "./AuthUserController";
import { CreateUserController } from "./CreateUserController";
import { GetUserController } from "./GetUserController";
import { ListUserFollowersController } from "./ListUserFollowersController";
import { ListUserFollowingsController } from "./ListUserFollowingsController";
import { UserFollowController } from "./UserFollowController";

const createController = new CreateUserController()
const authController = new AuthUserController()
const getUserController = new GetUserController()
const userFollowController = new UserFollowController()
const listUserFollowersController = new ListUserFollowersController()
const listUserFollowingsController = new ListUserFollowingsController()

export {
    createController,
    authController,
    getUserController,
    userFollowController,
    listUserFollowingsController,
    listUserFollowersController
}