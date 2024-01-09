import { RelationsRepository } from "../../repositories/RelationsRepository"
import { UsersRepository } from "../../repositories/UsersRepository"
import { CreateUserRelationService } from "./CreateUserRelation"
import { DeleteUserRelationService } from "./DeleteUserRelation"
import { FindUserByEmailService } from "./FindUserByEmail"
import { FindUserByIdService } from "./FindUserById"
import { GetUserRelationService } from "./GetUserRelation"
import { ListUserFollowersService } from "./ListUserFollowers"
import { ListUserFollowingsService } from "./ListUserFollowings"
import { SignupService } from "./SignupService"

const usersRepository = new UsersRepository()
const relationsRepository = new RelationsRepository()

export const signup = new SignupService(usersRepository)
export const findByEmail = new FindUserByEmailService(usersRepository)
export const findById = new FindUserByIdService(usersRepository)

export const createRelation = new CreateUserRelationService(relationsRepository)
export const getUserRelation = new GetUserRelationService(relationsRepository)
export const deleteUserRelation = new DeleteUserRelationService(relationsRepository)
export const listUserFollowers = new ListUserFollowersService(relationsRepository)
export const listUserFollowings = new ListUserFollowingsService(relationsRepository)