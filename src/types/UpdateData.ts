import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export type UserUpdateData = Prisma.Args<typeof prisma.user, 'update'>['data'];