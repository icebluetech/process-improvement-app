import { User } from './user';
import { Innovation } from './innovation';

export class Brainstorm{
    id: number;
    title: string;
    description: string;
    levelOfEffort: string;
    impact: string;
    innovationId: number;
    innovation: Innovation;
    userId: number;
    user: User;
}