import { ImageCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export interface AvatarRepositoryInterface {
    uploadAvatar:(data: ImageCreateData) => Promise<Image>;
}