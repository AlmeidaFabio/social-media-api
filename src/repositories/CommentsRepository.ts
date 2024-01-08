import { PrismaClient } from "@prisma/client";
import { CommentsRepositoryInterface } from "../interfaces/CommentsRepositoryInterface";
import { Comment } from "../types/Comment";
import { CommentCreateData } from "../types/CreateData";

export class CommentsRepository implements CommentsRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    comment = async (data: CommentCreateData): Promise<Comment> => {
        try {
            const comment = await this.prisma.comments.create({data})
            return comment
        } catch (error:any) {
            throw new Error(`Error in CommentsRepository:comment: ${error.message}`)
        }
    }

    getCommentsByPostId = async (postId: string): Promise<Comment[]> => {
        try {
            const comments = await this.prisma.comments.findMany({
                where: {postId}
            })
            return comments
        } catch (error:any) {
            throw new Error(`Error in CommentsRepository:getCommentsByPostId: ${error.message}`)
        }
    };
}