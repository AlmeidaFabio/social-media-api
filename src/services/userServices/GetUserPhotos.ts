import { PostsRepositoryInterface } from "../../interfaces/PostsRepositoryInterface";

export class GetUserPhotosService {
    constructor(private repository: PostsRepositoryInterface) {}

    execute = async (userId:string, page:string, limit:string) => {
        try {
            const photos = await this.repository.listPostsWhereTypeIsPhotoByUserId(userId, page, limit)
            return photos
        } catch (error) {
            throw new Error(`Error in GetUserPhotosService: ${error}`)
        }
    }
}