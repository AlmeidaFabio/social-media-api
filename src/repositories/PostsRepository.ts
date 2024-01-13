import { PrismaClient } from "@prisma/client";
import { PostsRepositoryInterface } from "../interfaces/PostsRepositoryInterface";
import { PostCreateData } from "../types/CreateData";
import { Post } from "../types/Post";
import { Photo } from "../types/Photo";

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

    listPostsByUserId = async (userId:string, page:string, limit:string): Promise<Post[]> => {
        try {
            const posts = await this.prisma.posts.findMany({
                where: {
                    userId
                },
                include: {
                    user:true,
                    likes:true,
                    comments:true
                },
                orderBy: {createdAt: "desc"},
                take: (parseInt(limit) * 1),
                skip: ((parseInt(page) - 1 ) * parseInt(limit))
            })
            return posts
        } catch (error:any) {
            throw new Error(`Error in PostsRepository:findPostById: ${error.message}`)
        }
    }

    listPostsWhereTypeIsPhotoByUserId = async (userId: string, page: string, limit: string): Promise<Photo[]> => {
        try {
            const posts = await this.prisma.posts.findMany({
                where: {
                    userId,
                    type: 'photo'
                },
                include: {
                    user:true,
                    likes:true,
                    comments:true
                },
                orderBy: {createdAt: "desc"},
                take: (parseInt(limit) * 1),
                skip: ((parseInt(page) - 1 ) * parseInt(limit))
            })

            const photos:Photo[] = []

            posts.map(post => {
                const photo = {
                    url: post.body,
                    likes: post.likes.filter(like => like.userId),
                    comments: post.comments.filter(comment => comment.body)
                }
                photos.push(photo)
            })

            return photos
            
        } catch (error:any) {
            throw new Error(`Error in PostsRepository:findPostById: ${error.message}`)
        }
    }
}