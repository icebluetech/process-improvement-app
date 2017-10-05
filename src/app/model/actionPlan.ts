
import { User } from '../model/user';

export class ActionPlan{
    id:number;
    description:string;
    user:User;
    due:string;
    completed:string;
    status:string;
}