import { comment, createPost, findPostById, getCommentsByPostId, getLikeByPostAndUserId, removeLiked, setLiked } from "./postsServices";
import { deleteAvatar, deleteCover, deletePhoto, findAvatarByUserId, findCoverByUserId, findPhotoById, uploadAvatar, uploadCover, uploadPhoto } from "./uploadServices";
import { createRelation, deleteUserRelation, findByEmail, findById, getUserRelation, listUserFollowers, listUserFollowings, signup } from "./userServices";

export const userServices = {
    signup,
    findByEmail,
    findById,
    createRelation,
    deleteUserRelation,
    getUserRelation,
    listUserFollowers,
    listUserFollowings
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
    getLikeByPostAndUserId,
    comment,
    getCommentsByPostId
}