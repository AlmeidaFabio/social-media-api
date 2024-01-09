import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export type UserCreateData = Prisma.Args<typeof prisma.user, 'create'>['data'];

export type AvatarCreateData = Prisma.Args<typeof prisma.avatar, 'create'>['data'];

export type CoverCreateData = Prisma.Args<typeof prisma.cover, 'create'>['data'];

export type PhotoCreateData = Prisma.Args<typeof prisma.photos, 'create'>['data'];

export type PostCreateData = Prisma.Args<typeof prisma.posts, 'create'>['data'];

export type LikeCreateData = Prisma.Args<typeof prisma.likes, 'create'>['data'];

export type CommentCreateData = Prisma.Args<typeof prisma.comments, 'create'>['data'];

export type RelationCreateData = Prisma.Args<typeof prisma.relations, 'create'>['data'];