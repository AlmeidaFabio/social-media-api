import { RelationsRepositoryInterface } from "../../interfaces/RelationsRepositoryInterface";
import { RelationCreateData } from "../../types/CreateData";

export class CreateUserRelationService {
    constructor(private repository: RelationsRepositoryInterface) {}

    execute = async (data: RelationCreateData) => {
        try {
            const relation = await this.repository.createRelation(data)
            return relation
        } catch (error) {
            throw new Error(`Error in CreateUserRelationService: ${error}`)
        }
    }
}