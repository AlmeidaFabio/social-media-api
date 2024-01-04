import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export type UserCreateData = Prisma.Args<typeof prisma.user, 'create'>['data'];

export type ImageCreateData = Prisma.Args<typeof prisma.avatar, 'create'>['data'];