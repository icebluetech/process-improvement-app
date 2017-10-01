import {User}from '../model/user';

export class InnovationViewModel {
    id: number;
    title: string;
    type: string;
    widget: string;
    owner: User;
    date: string;
}