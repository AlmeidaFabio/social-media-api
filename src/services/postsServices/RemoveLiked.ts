import { LikesRepositoryInterface } from "../../interfaces/LikesRepositoryInterface";

export class RemoveLikedService {
    constructor(private repository: LikesRepositoryInterface) {}

    execute = async (id:string) => {
        try {
            const like = await this.repository.removeLiked(id)
            return like
        } catch (error) {
            throw new Error(`Error in RemoveLikeService: ${error}`)
        }
    }
}