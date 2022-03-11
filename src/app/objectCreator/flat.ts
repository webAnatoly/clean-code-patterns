import { IFlat } from './objects.interfaces';

export class Flat {

    private readonly flat: IFlat;

    constructor(options: IFlat) {
        this.flat = { ...options }
    }
}
