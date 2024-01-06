import { PostsRepositoryInterface } from "../../interfaces/PostsRepositoryInterface";
import { PostCreateData } from "../../types/CreateData";

export class CreatePostService {
    constructor(private repository: PostsRepositoryInterface){}

    execute = async (data: PostCreateData) => {
        try {
            const post = await this.repository.create(data)
            return post
        } catch (error) {
            throw new Error(`Error in CreatePostService: ${error}`)
        }
    }
}