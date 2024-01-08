import { CommentsRepositoryInterface } from "../../interfaces/CommentsRepositoryInterface";

export class GetCommentsByPostIdService {
    constructor(private repository: CommentsRepositoryInterface) {}

    execute = async (postId: string) => {
        try {
            const comments = await this.repository.getCommentsByPostId(postId)
            return comments
        } catch (error) {
            throw new Error(`Error in GetCommentsByPostIdService: ${error}`)
        }
    }
}