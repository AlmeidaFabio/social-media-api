import { UserRepositoryInterface } from "../../interfaces/UserRepositoryInterface";

export class FindUserByEmailService {
    constructor(private repository: UserRepositoryInterface) {}

    execute = async (email: string) => {
        try {
            const user = await this.repository.findUserByEmail(email)
            return user
        } catch (error) {
            throw new Error(`Error in FindUserByEmailService: ${error}`)
        }
    }
}