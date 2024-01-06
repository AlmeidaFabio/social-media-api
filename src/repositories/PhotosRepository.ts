import { PrismaClient } from "@prisma/client";
import { PhotosRepositoryInterface } from "../interfaces/PhotosRepositoryInterface";
import { PhotoCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export class PhotosRepository implements PhotosRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    uploadPhoto = async (data: PhotoCreateData) => {
        try {
            const photo = await this.prisma.photos.create({data})
            return photo
        } catch (error:any) {
            throw new Error(`Error in PhotosRepository:uploadPhoto: ${error.message}`)
        }
    }

    findPhotoById = async (id: string): Promise<Image | null> => {
        try {
            const photo = await this.prisma.photos.findFirst({
                where: { id }
            })
            return photo
        } catch (error:any) {
            throw new Error(`Error in PhotosRepository:findPhotoByUserId: ${error.message}`)
        }
    }

    deletePhoto = async (id: string): Promise<Image> => {
        try {
            return await this.prisma.photos.delete({
                where: { id }
            })
        } catch (error:any) {
            throw new Error(`Error in PhotosRepository:deletePhoto: ${error.message}`)
        }
    };
}