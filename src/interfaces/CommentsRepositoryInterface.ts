import { Comment } from "../types/Comment";
import { CommentCreateData } from "../types/CreateData";

export interface CommentsRepositoryInterface {
    comment:(data: CommentCreateData) => Promise<Comment>;
    getCommentsByPostId:(postId: string) => Promise<Comment[]>;
}