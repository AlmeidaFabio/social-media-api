import { UserRepositoryInterface } from "../../interfaces/UserRepositoryInterface";
import { UserCreateData } from "../../types/UserData";

export class SignupService {
    constructor(private repository: UserRepositoryInterface){}

    execute = async (data: UserCreateData) => {
        try {
            const user = await this.repository.signup(data)
            return user
        } catch (error) {
            throw new Error(`Error in SignupService: ${error}`)
        }
    }
}