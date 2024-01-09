import { RelationsRepositoryInterface } from "../../interfaces/RelationsRepositoryInterface";

export class ListUserFollowingsService {
    constructor(private repository: RelationsRepositoryInterface) {}

    execute = async (id: string) => {
        try {
            const followings = await this.repository.getFollowings(id)
            return followings
        } catch (error) {
            throw new Error(`Error in ListUserFollowingsService: ${error}`)
        }
    }
}