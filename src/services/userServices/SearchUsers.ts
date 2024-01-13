import { UserRepositoryInterface } from "../../interfaces/UserRepositoryInterface";

export class SearchUsersService {
    constructor(private repository: UserRepositoryInterface) {}

    execute = async (txt: string) => {
        try {
            const users = await this.repository.searchUsers(txt)
            return users
        } catch (error) {
            throw new Error(`Error in SearchUsersService: ${error}`)
        }
    }
}