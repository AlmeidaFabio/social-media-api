import { PrismaClient } from "@prisma/client";
import { CoverCreateData } from "../types/CreateData";
import { Image } from "../types/Image";
import { CoverRepositoryInterface } from "../interfaces/CoverRepositoryInterface";

export class CoversRepository implements CoverRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    uploadCover = async (data: CoverCreateData): Promise<Image> => {
        try {
            const cover = await this.prisma.cover.create({
                data
            })
            return cover
        } catch (error:any) {
            throw new Error(`Error in CoversRepository:uploadCover: ${error.message}`)
        }
    }

    findCoverByUserId = async (id: string): Promise<Image | null> => {
        try {
            const avatar = await this.prisma.cover.findFirst({
                where: {
                    userId: id
                }
            })
            return avatar
        } catch (error: any) {
            throw new Error(`Error in CoversRepository:findCoverByUserId: ${error.message}`)
        }
    };

    deleteCover = async (id: string): Promise<Image> => {
        try {
            return await this.prisma.cover.delete({
                where: { id }
            })
        } catch (error:any) {
            throw new Error(`Error in CoversRepository:deleteCover: ${error.message}`)
        }
    };
}