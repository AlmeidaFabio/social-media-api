import { PostsRepositoryInterface } from "../../interfaces/PostsRepositoryInterface";

export class FindPostByIdService {
    constructor(private repository: PostsRepositoryInterface) {}

    execute = async (id:string) => {
        try {
            const post = await this.repository.findPostById(id)
            return post
        } catch (error:any) {
            throw new Error(`Error in FindPostByIdService: ${error}`)
        }
    }
}