import { LikeCreateData } from "../types/CreateData";
import { Like } from "../types/Like";

export interface LikesRepositoryInterface {
    setLiked:(data:LikeCreateData) => Promise<Like>;
    removeLiked:(id:string) => Promise<Like>;
    getLikeByPostAndUserId:(postId:string, userId:string) => Promise<Like | null>;
}