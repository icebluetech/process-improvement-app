import { User } from './user';
import { Process } from './process';
import { Widget } from './widget';
import { InnovationType } from './innovationtype';
import { InnovationCategory } from './innovationCategory';
import { Notification } from './notification';
import { RootCause } from './rootCause';
import { InnovationUser } from './innovationUser';
import { Department } from './department';

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
    department: Department;
    createdBy: User;
    process: Process;
    widget: Widget;

}