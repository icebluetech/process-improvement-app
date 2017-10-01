import { Widget } from './widget';
import { Innovation } from './innovation';
import { StateType } from './stateType';

export class State {

    id: string;

    stateTypeId: number;
    stateType: StateType;

    widgetId: number;
    widget: Widget;

    provided: number;
    providedMeasure: number;
    timeTaken: number;
    timeTakenMeasure: number;
    correct: number;
    empSatisfied:number;
    custSatisfied: number;
    backlogNumber: number;
    backlogWork: number;
    handoffs: number;
    approvals: number;

    innovationId: number;
    innovation: Innovation;
}