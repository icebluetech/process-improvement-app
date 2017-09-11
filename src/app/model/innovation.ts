import { User } from './user';
import { InnovationType } from './innovationtype';
import { InnovationCategory } from './innovationCategory';
import {Notification} from './notification';
import {RootCause} from './rootCause';
import {InnovationUser} from './innovationUser';

export class Innovation {

    id: number;
    title: string;
    innovationUsers: Array<InnovationUser>;
    date: Date;
    tasks: Array<Notification>;
    innovationTypeId: number;
    type: InnovationType
    innovationCategoryId: number;
    category: InnovationCategory;

    sponsor: string;
    customer: string;
    department: string;

}