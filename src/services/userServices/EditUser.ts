import { UserRepositoryInterface } from "../../interfaces/UserRepositoryInterface";
import { UserUpdateData } from "../../types/UpdateData";

export class EditUserService {
    constructor(private repository: UserRepositoryInterface) {}

    execute = async (id:string, data:UserUpdateData) => {
        try {
            const user = await this.repository.editUserInfos(id, data)
            return user
        } catch (error) {
            throw new Error(`Error in EditUserService: ${error}`)       
        }
    }
}