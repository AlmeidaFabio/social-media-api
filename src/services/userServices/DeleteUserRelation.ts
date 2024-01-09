import { RelationsRepositoryInterface } from "../../interfaces/RelationsRepositoryInterface";

export class DeleteUserRelationService {
    constructor(private repository: RelationsRepositoryInterface) {}

    execute = async (id:string) => {
        try {
            const relation =  await this.repository.deleteRelation(id)
            return relation
        } catch (error) {
            throw new Error(`Error in DeleteUserRelationService: ${error}`)
        }
    }
}