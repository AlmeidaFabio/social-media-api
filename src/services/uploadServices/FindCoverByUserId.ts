import { CoverRepositoryInterface } from "../../interfaces/CoverRepositoryInterface";

export class FindCoverByUserIdService {
    constructor(private repository: CoverRepositoryInterface){}

    execute = async (userId: string) => {
        try {
            const cover = await this.repository.findCoverByUserId(userId)
            return cover
        } catch (error:any) {
            throw new Error(`Error in FindCoverByUserIdService: ${error.message}`)
        }
    }
}