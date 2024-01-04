import { AvatarsRepository } from "../../repositories/AvatarsRepository";
import { CoversRepository } from "../../repositories/CoversRepository";
import { DeleteAvatarService } from "./DeleteAvatar";
import { DeleteCoverService } from "./DeleteCover.";
import { FindAvatarByUserIdService } from "./FindAvatarById";
import { FindCoverByUserIdService } from "./FindCoverByUserId";
import { UploadAvatarService } from "./UploadAvatar";
import { UploadCoverService } from "./UploadCover";

const avatarsRepository = new AvatarsRepository()
const coversRepository = new CoversRepository()

export const uploadAvatar = new UploadAvatarService(avatarsRepository)
export const uploadCover = new UploadCoverService(coversRepository)

export const findAvatarByUserId = new FindAvatarByUserIdService(avatarsRepository)
export const findCoverByUserId = new FindCoverByUserIdService(coversRepository)

export const deleteAvatar = new DeleteAvatarService(avatarsRepository)
export const deleteCover = new DeleteCoverService(coversRepository)