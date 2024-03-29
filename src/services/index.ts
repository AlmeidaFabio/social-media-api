import { comment, createPost, findPostById, getCommentsByPostId, getLikeByPostAndUserId, listPostsByUserId, removeLiked, setLiked } from "./postsServices";
import { deleteAvatar, deleteCover, deletePhoto, findAvatarByUserId, findCoverByUserId, findPhotoById, uploadAvatar, uploadCover, uploadPhoto } from "./uploadServices";
import { createRelation, deleteUserRelation, editUser, findByEmail, findById, getUserPhotos, getUserRelation, listUserFollowers, listUserFollowings, searchUsers, signup } from "./userServices";

export const userServices = {
    signup,
    findByEmail,
    findById,
    createRelation,
    deleteUserRelation,
    getUserRelation,
    listUserFollowers,
    listUserFollowings,
    getUserPhotos,
    editUser,
    searchUsers
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
    listPostsByUserId,
    setLiked,
    removeLiked,
    getLikeByPostAndUserId,
    comment,
    getCommentsByPostId
}