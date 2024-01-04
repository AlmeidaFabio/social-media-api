import { AvatarsRepository } from "../../repositories/AvatarsRepository";
import { UploadAvatarService } from "./UploadAvatar";

const avatarsRepository = new AvatarsRepository()

export const uploadAvatar = new UploadAvatarService(avatarsRepository)