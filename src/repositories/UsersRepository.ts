import { PrismaClient } from "@prisma/client";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";
import { UserCreateData } from "../types/CreateData";
import { User } from "../types/User";

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
}