import { RelationCreateData } from "../types/CreateData";
import { Follower } from "../types/Follower";
import { Following } from "../types/Following";
import { Relation } from "../types/Relation";

export interface RelationsRepositoryInterface {
    getUserRelation: (userFrom:string,  userTo:string) => Promise<Relation | null>;
    createRelation: (data: RelationCreateData) => Promise<Relation>;
    deleteRelation: (id:string) => Promise<Relation>;
    getFollowers: (id: string) => Promise<Follower[]>;
    getFollowings: (id: string) => Promise<Following[]>;
}