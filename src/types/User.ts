import { Post } from "./Post";

export interface User {
    id?: number;
    email: string;
    name: string;
    posts: Post[];
}