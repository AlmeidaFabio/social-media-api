import { User } from "../types/User";
import { UserCreateData } from "../types/CreateData";
import { UserUpdateData } from "../types/UpdateData";

export interface UserRepositoryInterface {
    signup:(data:UserCreateData) => Promise<User>;
    findUserByEmail:(email:string) => Promise<User | null>;
    findUserById:(id:string) => Promise<User | null>;
    editUserInfos:(id:string, data:UserUpdateData) => Promise<User>;
}