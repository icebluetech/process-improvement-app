
import { User } from '../model/user';

export class ActionPlan{
    id:number;
    description:string;
    user:User;
    dueDate:string;
    dateCompleted:string;
    status:string;
}