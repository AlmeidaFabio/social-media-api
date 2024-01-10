import { PostsRepositoryInterface } from "../../interfaces/PostsRepositoryInterface";

export class ListPostsByUserIdService {
    constructor(private repository: PostsRepositoryInterface){}

    execute = async (userId:string, page:string, limit:string) => {
        try {
            const posts = await this.repository.listPostsByUserId(userId, page, limit)
            return posts
        } catch (error) {
            throw new Error(`Error in ListPostsByUserIdService: ${error}`)
        }
    }
}