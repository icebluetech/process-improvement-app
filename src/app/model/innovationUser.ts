import { Innovation } from './innovation';
import { User } from './user';
import { UserRole } from './userrole';

export class InnovationUser {
    innovationId: number;
    innovation: Innovation;
    
    userId: number;
    user: User;
    
    userRole:UserRole;
    userRoleId:number;
}