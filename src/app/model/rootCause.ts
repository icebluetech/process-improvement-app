import { User } from './user';
import { Innovation } from './innovation';

export class RootCause {
    Id: number;
    Title: string;
    Description: string;
    Tool: string;
    Innovations: Array<Innovation>;
    UserId: number;
    User: User;
}