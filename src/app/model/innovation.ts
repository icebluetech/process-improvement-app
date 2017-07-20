import { User } from './user';
import { InnovationType } from './innovationtype';
import { InnovationCategory } from './innovationCategory';
import {Notification} from './notification';
import {RootCauseAnalysis} from './rootCauseAnalysis';
import {InnovationUser} from './innovationUser';

export class Innovation {

    Id: number;
    Title: string;
    InnovationUsers: Array<InnovationUser>;
    Date: Date;
    Tasks: Array<Notification>;
    InnovationTypeId: number;
    Type: InnovationType
    InnovationCategoryId: number;
    Category: InnovationCategory;
    Why: string;
    CurrentState: string;
    FutureState: string;
    RootCauseAnalysisId: number;
    RootCauseAnalysis: RootCauseAnalysis;
}