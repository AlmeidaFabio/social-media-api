import { PostCreateData } from "../types/CreateData";
import { Post } from "../types/Post";

export interface PostsRepositoryInterface {
    create:(data: PostCreateData) => Promise<Post>;
}