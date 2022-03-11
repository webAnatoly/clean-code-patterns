import { IOffice } from './objects.interfaces';

export class Office {

    private readonly office: IOffice;

    constructor(options: IOffice) {
        this.office = { ...options }
    }
}
