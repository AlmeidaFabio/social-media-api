import { PostsRepository } from "../../repositories/PostsRepository";
import { CreatePostService } from "./CreatePost";

const postRepository = new PostsRepository()

export const createPost = new CreatePostService(postRepository)