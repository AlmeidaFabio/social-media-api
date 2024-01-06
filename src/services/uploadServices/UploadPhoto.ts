import { PhotosRepositoryInterface } from "../../interfaces/PhotosRepositoryInterface"
import { PhotoCreateData } from "../../types/CreateData"

export class UploadPhotoService {
    constructor(private repository: PhotosRepositoryInterface){}

    execute = async (data: PhotoCreateData) => {
        try {
            const photo = await this.repository.uploadPhoto(data)
            return photo
        } catch (error:any) {
            throw new Error(`Error in UploadPhotoService: ${error.message}`)
        }
    }
}