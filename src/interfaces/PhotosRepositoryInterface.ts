import { PhotoCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export interface PhotosRepositoryInterface {
    uploadPhoto:(data: PhotoCreateData) => Promise<Image>;
    findPhotoById:(id:string) => Promise<Image | null>;
    deletePhoto:(id:string) => Promise<Image>;
}