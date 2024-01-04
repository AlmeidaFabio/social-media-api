import { AvatarRepositoryInterface } from "../../interfaces/AvatarRepositoryInterface";

export class DeleteAvatarService {
    constructor(private repository: AvatarRepositoryInterface){}

    execute = async (id: string) => {
        try {
            const avatar = await this.repository.deleteAvatar(id)
            return avatar
        } catch (error:any) {
            throw new Error(`Error in DeleteAvatarService: ${error.message}`)
        }
    }
}