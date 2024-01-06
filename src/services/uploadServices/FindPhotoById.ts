import { PhotosRepositoryInterface } from "../../interfaces/PhotosRepositoryInterface"

export class FindPhotoByIdService {
    constructor(private repository: PhotosRepositoryInterface){}

    execute = async (id: string) => {
        try {
            const photo = await this.repository.findPhotoById(id)
            return photo
        } catch (error:any) {
            throw new Error(`Error in FindPhotoByIdService: ${error.message}`)
        }
    }
}