import { AvatarCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export interface AvatarRepositoryInterface {
    uploadAvatar:(data: AvatarCreateData) => Promise<Image>;
}