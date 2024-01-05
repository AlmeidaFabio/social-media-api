import { deleteAvatar, deleteCover, findAvatarByUserId, findCoverByUserId, uploadAvatar, uploadCover } from "./uploadServices";
import { findByEmail, findById, signup } from "./userServices";

export const userServices = {
    signup,
    findByEmail,
    findById
}

export const uploadServices = {
    uploadAvatar,
    uploadCover,
    findAvatarByUserId,
    findCoverByUserId,
    deleteAvatar,
    deleteCover
}