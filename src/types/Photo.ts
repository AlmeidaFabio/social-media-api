import { Comment } from "./Comment";
import { Like } from "./Like";

export type Photo = {
    url: string;
    likes: Like[];
    comments: Comment[];
}