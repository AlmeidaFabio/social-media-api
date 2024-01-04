import { CoverCreateData } from "../types/CreateData";
import { Image } from "../types/Image";

export interface CoverRepositoryInterface {
    uploadCover:(data: CoverCreateData) => Promise<Image>;
    findCoverByUserId:(id:string) => Promise<Image | null>;
    deleteCover:(id:string) => Promise<Image>;
}