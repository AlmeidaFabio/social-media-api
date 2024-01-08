import { createPost, findPostById, getLikeByPostAndUserId, removeLiked, setLiked } from "./postsServices";
import { deleteAvatar, deleteCover, deletePhoto, findAvatarByUserId, findCoverByUserId, findPhotoById, uploadAvatar, uploadCover, uploadPhoto } from "./uploadServices";
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
    deleteCover,
    uploadPhoto,
    findPhotoById,
    deletePhoto
}

export const postServices = {
    createPost,
    findPostById,
    setLiked,
    removeLiked,
    getLikeByPostAndUserId
}