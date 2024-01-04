import { CoverRepositoryInterface } from "../../interfaces/CoverRepositoryInterface";
import { CoverCreateData } from "../../types/CreateData";

export class UploadCoverService {
    constructor(private repository: CoverRepositoryInterface){}

    execute = async (data: CoverCreateData) => {
        try {
            const cover = await this.repository.uploadCover(data)
            return cover
        } catch (error:any) {
            throw new Error(`Error in UploadCoverService: ${error.message}`)
        }
    }
}