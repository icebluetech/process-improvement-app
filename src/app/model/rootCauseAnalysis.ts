import { User } from './user';
import { Innovation } from './innovation';

export class RootCauseAnalysis {
    Id: number;
    Title: string;
    Description: string;
    Tool: string;
    Innovations: Array<Innovation>;
    UserId: number;
    User: User;
}