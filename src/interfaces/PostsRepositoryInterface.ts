import { PostCreateData } from "../types/CreateData";
import { Photo } from "../types/Photo";
import { Post } from "../types/Post";

export interface PostsRepositoryInterface {
    create:(data: PostCreateData) => Promise<Post>;
    findPostById:(id:string) => Promise<Post | null>;
    listPostsByUserId:(userId:string, page:string, limit:string) => Promise<Post[]>;
    listPostsWhereTypeIsPhotoByUserId:(userId:string, page:string, limit:string) => Promise<Photo[]>;
}