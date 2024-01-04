import { AvatarsRepository } from "../../repositories/AvatarsRepository";
import { CoversRepository } from "../../repositories/CoversRepository";
import { UploadAvatarService } from "./UploadAvatar";
import { UploadCoverService } from "./UploadCover";

const avatarsRepository = new AvatarsRepository()
const coversRepository = new CoversRepository()

export const uploadAvatar = new UploadAvatarService(avatarsRepository)
export const uploadCover = new UploadCoverService(coversRepository)