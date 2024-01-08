import { LikesRepositoryInterface } from "../../interfaces/LikesRepositoryInterface";

export class GetLikeByPostAndUserIdService {
    constructor(private repository: LikesRepositoryInterface) {}

    execute = async (postId:string, userId:string) => {
        try {
            const like = await this.repository.getLikeByPostAndUserId(postId, userId)
            return like
        } catch (error) {
            throw new Error(`Error in GetLikeByPostAndUserIdService: ${error}`)
        }
    }
}