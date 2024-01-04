import { CoverRepositoryInterface } from "../../interfaces/CoverRepositoryInterface";

export class DeleteCoverService {
    constructor(private repository: CoverRepositoryInterface){}

    execute = async (id: string) => {
        try {
            const cover = await this.repository.deleteCover(id)
            return cover
        } catch (error:any) {
            throw new Error(`Error in DeleteCoverService: ${error.message}`)
        }
    }
}