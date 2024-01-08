import { PrismaClient } from "@prisma/client";
import { PostsRepositoryInterface } from "../interfaces/PostsRepositoryInterface";
import { PostCreateData } from "../types/CreateData";
import { Post } from "../types/Post";

export class PostsRepository implements PostsRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    create = async (data: PostCreateData):Promise<Post> => {
        try {
            const posts = await this.prisma.posts.create({
                data
            })
            return posts
        } catch (error: any) {
            throw new Error(`Error in PostsRepository:create: ${error.message}`)
        }
    }

    findPostById = async (id: string): Promise<Post | null> => {
        try {
            const post = await this.prisma.posts.findFirst({
                where: { id }
            })
            return post
        } catch (error:any) {
            throw new Error(`Error in PostsRepository:findPostById: ${error.message}`)
        }
    };
}