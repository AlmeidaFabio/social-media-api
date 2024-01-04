import { AvatarCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export interface AvatarRepositoryInterface {
    uploadAvatar:(data: AvatarCreateData) => Promise<Image>;
    findAvatarByUserId:(id:string) => Promise<Image | null>;
    deleteAvatar:(id:string) => Promise<Image>;
}