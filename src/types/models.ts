/* eslint-disable prettier/prettier */

export interface IPost {
    id: string;
    createdAt: string;          // Consider using Date type if possible
    minHrAgo: string;           // Consider renaming for clarity (e.g., timeAgo)
    image?: string;
    images?: string[];
    caption?: string;
    video?: string;
    videos?: string[];
    thought: string;
    user: IUser;
    noOfComments: number;
    noOfLikes: number;
    likes: number;
    comments: IComment[];
    replies: string[];          // If replies need to be structured, consider creating a new interface
}

export interface IUser {
    id: string;
    username: string;
    name: string;
    profileImage?: string;
    backgroundImage: string;
    bio?: string;
    posts?: IPost[];
    link?: string[];            // Consider renaming to links for clarity
}

export interface IComment {
    id: string;
    comment: string;
    replies?: string[];         // Same note as in IPost regarding structured replies
    user: IUser;
}
