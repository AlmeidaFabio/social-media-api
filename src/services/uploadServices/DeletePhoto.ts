import { PhotosRepositoryInterface } from "../../interfaces/PhotosRepositoryInterface"

export class DeletePhotoService {
    constructor(private repository: PhotosRepositoryInterface){}

    execute = async (id: string) => {
        try {
            const photo = await this.repository.deletePhoto(id)
            return photo
        } catch (error:any) {
            throw new Error(`Error in DeletePhotoService: ${error.message}`)
        }
    }
}