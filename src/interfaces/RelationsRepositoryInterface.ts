import { RelationCreateData } from "../types/CreateData";
import { Relation } from "../types/Relation";

export interface RelationsRepositoryInterface {
    getUserRelation: (userFrom:string,  userTo:string) => Promise<Relation | null>;
    createRelation: (data: RelationCreateData) => Promise<Relation>;
    deleteRelation: (id:string) => Promise<Relation>;
    getFollowers: (id: string) => Promise<Relation[]>;
    getFollowings: (id: string) => Promise<Relation[]>;
}