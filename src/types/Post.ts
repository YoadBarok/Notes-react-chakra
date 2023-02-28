import { User } from "./User";

export interface Post {
    id?: number;
    title: string;
    body: string;
    createdAt: string;
    author: User;
    authorId: number;
}