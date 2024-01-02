import { User } from "../types/User";
import { UserCreateData } from "../types/UserData";

export interface UserRepositoryInterface {
    signup:(data:UserCreateData) => Promise<User>;
    findUserByEmail:(email:string) => Promise<User | null>;
}