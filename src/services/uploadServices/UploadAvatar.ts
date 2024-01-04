import { AvatarRepositoryInterface } from "../../interfaces/AvatarRepositoryInterface";
import { ImageCreateData } from "../../types/CreateData";

export class UploadAvatarService {
    constructor(private repository: AvatarRepositoryInterface){}

    execute = async (data: ImageCreateData) => {
        try {
            const avatar = await this.repository.uploadAvatar(data)
            return avatar
        } catch (error:any) {
            throw new Error(`Error in UploadAvatarService: ${error.message}`)
        }
    }
}