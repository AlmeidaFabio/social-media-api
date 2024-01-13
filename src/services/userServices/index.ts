import { PostsRepository } from "../../repositories/PostsRepository"
import { RelationsRepository } from "../../repositories/RelationsRepository"
import { UsersRepository } from "../../repositories/UsersRepository"
import { CreateUserRelationService } from "./CreateUserRelation"
import { DeleteUserRelationService } from "./DeleteUserRelation"
import { EditUserService } from "./EditUser"
import { FindUserByEmailService } from "./FindUserByEmail"
import { FindUserByIdService } from "./FindUserById"
import { GetUserPhotosService } from "./GetUserPhotos"
import { GetUserRelationService } from "./GetUserRelation"
import { ListUserFollowersService } from "./ListUserFollowers"
import { ListUserFollowingsService } from "./ListUserFollowings"
import { SearchUsersService } from "./SearchUsers"
import { SignupService } from "./Signup"

const usersRepository = new UsersRepository()
const relationsRepository = new RelationsRepository()
const postRepository = new PostsRepository()

export const signup = new SignupService(usersRepository)
export const findByEmail = new FindUserByEmailService(usersRepository)
export const findById = new FindUserByIdService(usersRepository)

export const createRelation = new CreateUserRelationService(relationsRepository)
export const getUserRelation = new GetUserRelationService(relationsRepository)
export const deleteUserRelation = new DeleteUserRelationService(relationsRepository)
export const listUserFollowers = new ListUserFollowersService(relationsRepository)
export const listUserFollowings = new ListUserFollowingsService(relationsRepository)
export const getUserPhotos = new GetUserPhotosService(postRepository)
export const editUser = new EditUserService(usersRepository)
export const searchUsers = new SearchUsersService(usersRepository)