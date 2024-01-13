import { Prisma, PrismaClient } from "@prisma/client";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";
import { UserCreateData } from "../types/CreateData";
import { User } from "../types/User";
import { UserUpdateData } from "../types/UpdateData";

export class UsersRepository implements UserRepositoryInterface {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    signup = async (data: UserCreateData): Promise<User> => {
        try {
            const newUser = await this.prisma.user.create({data})
            return newUser
        } catch (error:any) {
            throw new Error(`Error in UsersRepository:signup: ${error.message}`)
        }
    };

    findUserByEmail = async (email: string): Promise<User | null> => {
        try {
            const user = await this.prisma.user.findFirst({
                where: { email }
            })
            return user
        } catch (error:any) {
            throw new Error(`Error in UsersRepository:findUserByemail: ${error.message}`)
        }
    };

    findUserById = async (id: string): Promise<User | null> => {
        try {
            const user = await this.prisma.user.findUnique({
                where: { id },
                include: {
                    avatar: true,
                    cover:true,
                    photos: true,
                    posts: {
                        include: {
                            likes: true,
                            comments: true
                        }
                    },
                    follow: true,
                    following: true
                }
            })
            return user
        } catch (error:any) {
            throw new Error(`Error in UsersRepository:findUserById: ${error.message}`)
        }
    }

    editUserInfos = async (id: string, data: UserUpdateData): Promise<User> => {
        try {
            return await this.prisma.user.update({
                where: { id },
                data
            })
        } catch (error:any) {
            throw new Error(`Error in UsersRepository:editUserInfos: ${error.message}`)
        }
    };

    searchUsers = async (txt: string): Promise<User[]> => {
        try {

            const users = await this.prisma.user.findMany({
                where: {
                    firstName: {
                        contains: `${txt}`
                    } 
                },
                include: {
                    avatar: true
                }
            })

            return users
        } catch (error:any) {
            throw new Error(`Error in UsersRepository:editUserInfos: ${error.message}`)
        }
    };
}