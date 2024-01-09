import { RelationsRepositoryInterface } from "../../interfaces/RelationsRepositoryInterface";

export class GetUserRelationService {
    constructor(private repository: RelationsRepositoryInterface) {}

    execute = async (userFrom:string,  userTo:string) => {
        try {
            const relation = await this.repository.getUserRelation(userFrom, userTo)
            return relation
        } catch (error) {
            throw new Error(`Error in GetUserRelationService: ${error}`)
        }
    }
}