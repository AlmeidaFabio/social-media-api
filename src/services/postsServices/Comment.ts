import { CommentsRepositoryInterface } from "../../interfaces/CommentsRepositoryInterface";
import { CommentCreateData } from "../../types/CreateData";

export class CommnentService {
    constructor(private repository: CommentsRepositoryInterface) {}

    execute = async (data: CommentCreateData) => {
        try {
            const comment = await this.repository.comment(data)
            return comment
        } catch (error:any) {
            throw new Error(`Error in CommnentService: ${error}`)
        }
    }
}