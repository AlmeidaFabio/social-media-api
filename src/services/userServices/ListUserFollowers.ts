import { RelationsRepositoryInterface } from "../../interfaces/RelationsRepositoryInterface";

export class ListUserFollowersService {
    constructor(private repository: RelationsRepositoryInterface) {}

    execute = async (id: string) => {
        try {
            const followers = await this.repository.getFollowers(id)
            return followers
        } catch (error) {
            throw new Error(`Error in ListUserFollowersService: ${error}`)
        }
    }
}