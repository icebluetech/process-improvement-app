import { User } from './user';
import { Innovation } from './innovation';

export class Experiment {
    id: number;
    title:string;
    what: string;
    who: string;
    when: string;
    status: string;
    completionDate: Date;
    innovationId: number;
    innovation: Innovation;
    userId: number;
    user: User;
}