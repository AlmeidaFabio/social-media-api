import { PrismaClient } from "@prisma/client";
import { AvatarRepositoryInterface } from "../interfaces/AvatarRepositoryInterface";
import { AvatarCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export class AvatarsRepository implements AvatarRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    uploadAvatar = async (data: AvatarCreateData): Promise<Image> => {
        try {
            const avatar = await this.prisma.avatar.create({
                data
            })
            return avatar
        } catch (error:any) {
            throw new Error(`Error in AvatarsRepository:uploadAvatar: ${error.message}`)
        }
    }

    findAvatarByUserId = async (id: string): Promise<Image | null> => {
        try {
            const avatar = await this.prisma.avatar.findFirst({
                where: {
                    userId: id
                }
            })
            return avatar
        } catch (error: any) {
            throw new Error(`Error in AvatarsRepository:findAvatarByUserId: ${error.message}`)
        }
    };

    deleteAvatar = async (id: string): Promise<Image> => {
        try {
            return await this.prisma.avatar.delete({
                where: { id }
            })
        } catch (error:any) {
            throw new Error(`Error in AvatarsRepository:deleteAvatar: ${error.message}`)
        }
    };
}