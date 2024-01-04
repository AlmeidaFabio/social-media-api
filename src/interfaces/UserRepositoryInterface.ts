import { User } from "../types/User";
import { UserCreateData } from "../types/CreateData";

export interface UserRepositoryInterface {
    signup:(data:UserCreateData) => Promise<User>;
    findUserByEmail:(email:string) => Promise<User | null>;
}