import { UserRepositoryInterface } from "../../interfaces/UserRepositoryInterface";

export class FindUserByIdService {
    constructor(private repository: UserRepositoryInterface) {}

    execute = async (id: string) => {
        try {
            const user = await this.repository.findUserById(id)
            return user
        } catch (error) {
            throw new Error(`Error in FindUserByIdService: ${error}`)
        }
    }
}