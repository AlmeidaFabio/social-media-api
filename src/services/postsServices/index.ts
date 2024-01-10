import { CommentsRepository } from "../../repositories/CommentsRepository";
import { LikesRepository } from "../../repositories/LikesRepository";
import { PostsRepository } from "../../repositories/PostsRepository";
import { CommnentService } from "./Comment";
import { CreatePostService } from "./CreatePost";
import { FindPostByIdService } from "./FindPostById";
import { GetCommentsByPostIdService } from "./GetCommentsByPostId";
import { GetLikeByPostAndUserIdService } from "./GetLikeByPostAndUserId";
import { ListPostsByUserIdService } from "./ListPostsByUserId";
import { RemoveLikedService } from "./RemoveLiked";
import { SetLikedService } from "./SetLiked";

const postRepository = new PostsRepository()
const likesRepository = new LikesRepository()
const commentsRepository = new CommentsRepository()

export const createPost = new CreatePostService(postRepository)
export const findPostById = new FindPostByIdService(postRepository)
export const listPostsByUserId = new ListPostsByUserIdService(postRepository)

export const setLiked = new SetLikedService(likesRepository)
export const removeLiked = new RemoveLikedService(likesRepository)
export const getLikeByPostAndUserId = new GetLikeByPostAndUserIdService(likesRepository)

export const comment = new CommnentService(commentsRepository)
export const getCommentsByPostId = new GetCommentsByPostIdService(commentsRepository)