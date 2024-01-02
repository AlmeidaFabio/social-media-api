import { AuthUserController } from "./AuthUserController";
import { CreateUserController } from "./CreateUserController";

const createController = new CreateUserController()
const authController = new AuthUserController()

export {
    createController,
    authController
}