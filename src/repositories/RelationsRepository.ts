import { PrismaClient } from "@prisma/client";
import { RelationsRepositoryInterface } from "../interfaces/RelationsRepositoryInterface";
import { Relation } from "../types/Relation";
import { RelationCreateData } from "../types/CreateData";

export class RelationsRepository implements RelationsRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    getUserRelation = async (userFrom: string, userTo: string): Promise<Relation | null> => {
        try {
            const relation = await this.prisma.relations.findFirst({
                where: {
                    userFrom,
                    userTo
                }
            })
            return relation
        } catch (error) {
            throw new Error(`Error in RelationsRepository:getUserRelation: ${error}`)
        }
    };

    createRelation = async (data: RelationCreateData): Promise<Relation> => {
        try {
            const relation = await this.prisma.relations.create({data})
            return relation
        } catch (error) {
            throw new Error(`Error in RelationsRepository:getUserRelation: ${error}`)
        }
    };

    deleteRelation = async (id: string): Promise<Relation> => {
        try {
            const relation = await this.prisma.relations.delete({
                where: { id }
            })
            return relation
        } catch (error) {
            throw new Error(`Error in RelationsRepository:getUserRelation: ${error}`)
        }
    };

    getFollowers = async (id: string): Promise<Relation[]> => {
        try {
            const followers = await this.prisma.relations.findMany({
                where: {
                    userTo: id
                }
            })
            return followers
        } catch (error) {
            throw new Error(`Error in RelationsRepository:getUserRelation: ${error}`)
        }
    };

    getFollowings = async (id: string): Promise<Relation[]> => {
        try {
            const followings = await this.prisma.relations.findMany({
                where: {
                    userFrom: id
                }
            })
            return followings
        } catch (error) {
            throw new Error(`Error in RelationsRepository:getUserRelation: ${error}`)
        }
    };   
}