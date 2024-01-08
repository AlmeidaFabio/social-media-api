import { LikesRepository } from "../../repositories/LikesRepository";
import { PostsRepository } from "../../repositories/PostsRepository";
import { CreatePostService } from "./CreatePost";
import { FindPostByIdService } from "./FindPostById";
import { GetLikeByPostAndUserIdService } from "./GetLikeByPostAndUserId";
import { RemoveLikedService } from "./RemoveLiked";
import { SetLikedService } from "./SetLiked";

const postRepository = new PostsRepository()
const likesRepository = new LikesRepository()

export const createPost = new CreatePostService(postRepository)
export const findPostById = new FindPostByIdService(postRepository)

export const setLiked = new SetLikedService(likesRepository)
export const removeLiked = new RemoveLikedService(likesRepository)
export const getLikeByPostAndUserId = new GetLikeByPostAndUserIdService(likesRepository)