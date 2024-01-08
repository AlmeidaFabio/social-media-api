import { LikesRepositoryInterface } from "../../interfaces/LikesRepositoryInterface";
import { LikeCreateData } from "../../types/CreateData";

export class SetLikedService {
    constructor(private repository: LikesRepositoryInterface){}

    execute = async (data: LikeCreateData) => {
        try {
            const like = await this.repository.setLiked(data)
            return like
        } catch (error) {
            throw new Error(`Error in SetLikedService: ${error}`)
        }
    }
}