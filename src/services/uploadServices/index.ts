import { AvatarsRepository } from "../../repositories/AvatarsRepository";
import { CoversRepository } from "../../repositories/CoversRepository";
import { PhotosRepository } from "../../repositories/PhotosRepository";
import { DeleteAvatarService } from "./DeleteAvatar";
import { DeleteCoverService } from "./DeleteCover.";
import { DeletePhotoService } from "./DeletePhoto";
import { FindAvatarByUserIdService } from "./FindAvatarById";
import { FindCoverByUserIdService } from "./FindCoverByUserId";
import { FindPhotoByIdService } from "./FindPhotoById";
import { UploadAvatarService } from "./UploadAvatar";
import { UploadCoverService } from "./UploadCover";
import { UploadPhotoService } from "./UploadPhoto";

const avatarsRepository = new AvatarsRepository()
const coversRepository = new CoversRepository()
const photosRepository = new PhotosRepository()

export const uploadAvatar = new UploadAvatarService(avatarsRepository)
export const uploadCover = new UploadCoverService(coversRepository)
export const uploadPhoto = new UploadPhotoService(photosRepository)

export const findAvatarByUserId = new FindAvatarByUserIdService(avatarsRepository)
export const findCoverByUserId = new FindCoverByUserIdService(coversRepository)
export const findPhotoById = new FindPhotoByIdService(photosRepository)

export const deleteAvatar = new DeleteAvatarService(avatarsRepository)
export const deleteCover = new DeleteCoverService(coversRepository)
export const deletePhoto = new DeletePhotoService(photosRepository)