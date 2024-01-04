import { AvatarRepositoryInterface } from "../../interfaces/AvatarRepositoryInterface";
import { AvatarCreateData } from "../../types/CreateData";

export class UploadAvatarService {
    constructor(private repository: AvatarRepositoryInterface){}

    execute = async (data: AvatarCreateData) => {
        try {
            const avatar = await this.repository.uploadAvatar(data)
            return avatar
        } catch (error:any) {
            throw new Error(`Error in UploadAvatarService: ${error.message}`)
        }
    }
}