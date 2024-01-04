import { deleteAvatar, deleteCover, findAvatarByUserId, findCoverByUserId, uploadAvatar, uploadCover } from "./uploadServices";
import { findByEmail, signup } from "./userServices";

export const userServices = {
    signup,
    findByEmail
}

export const uploadServices = {
    uploadAvatar,
    uploadCover,
    findAvatarByUserId,
    findCoverByUserId,
    deleteAvatar,
    deleteCover
}