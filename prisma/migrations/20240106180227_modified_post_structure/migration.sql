/*
  Warnings:

  - You are about to drop the column `legend` on the `Photos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "legend";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "legend" TEXT DEFAULT '';
