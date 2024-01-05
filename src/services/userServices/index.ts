import { UsersRepository } from "../../repositories/UsersRepository"
import { FindUserByEmailService } from "./FindUserByEmail"
import { FindUserByIdService } from "./FindUserById"
import { SignupService } from "./SignupService"

const usersRepository = new UsersRepository()

export const signup = new SignupService(usersRepository)
export const findByEmail = new FindUserByEmailService(usersRepository)
export const findById = new FindUserByIdService(usersRepository)