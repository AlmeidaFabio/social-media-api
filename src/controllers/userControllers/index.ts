import { AuthUserController } from "./AuthUserController";
import { CreateUserController } from "./CreateUserController";
import { GetUserController } from "./GetUserController";

const createController = new CreateUserController()
const authController = new AuthUserController()
const getUserController = new GetUserController()

export {
    createController,
    authController,
    getUserController
}