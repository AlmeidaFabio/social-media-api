import { AvatarRepositoryInterface } from "../../interfaces/AvatarRepositoryInterface";

export class FindAvatarByUserIdService {
    constructor(private repository: AvatarRepositoryInterface){}

    execute = async (userId: string) => {
        try {
            const avatar = await this.repository.findAvatarByUserId(userId)
            return avatar
        } catch (error:any) {
            throw new Error(`Error in FindAvatarByUserIdService: ${error.message}`)
        }
    }
}