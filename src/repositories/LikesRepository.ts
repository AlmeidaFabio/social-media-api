import { PrismaClient } from "@prisma/client"
import { LikesRepositoryInterface } from "../interfaces/LikesRepositoryInterface"
import { LikeCreateData } from "../types/CreateData"
import { Like } from "../types/Like"

export class LikesRepository implements LikesRepositoryInterface{
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    setLiked = async (data: LikeCreateData): Promise<Like> => {
        try {
            const like = await this.prisma.likes.create({data})
            return like
        } catch (error:any) {
            throw new Error(`Error in LikesRepository:setLike: ${error.message}`)
        }
    }

    removeLiked = async (id: string): Promise<Like> => {
        try {
            return await this.prisma.likes.delete({
                where: {id}
            })
        } catch (error:any) {
            throw new Error(`Error in LikesRepository:removeLike: ${error.message}`)
        }
    };

    getLikeByPostAndUserId = async (postId: string, userId: string): Promise<Like | null> => {
        try {
            const like = await this.prisma.likes.findFirst({
                where: {
                    postId,
                    userId
                }
            })
            return like
        } catch (error:any) {
            throw new Error(`Error in LikesRepository:getLikeByPostAndUserId: ${error.message}`)
        }
    };
}