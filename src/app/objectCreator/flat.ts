import { IFlat } from './objects.interfaces';
import { MathConstants } from './objects.interfaces';

export class Flat {

    private readonly flat: IFlat;

    constructor(options: IFlat) {
        this.flat = { ...options }
    }

    public computeCost(): number {
        let price = 0;
        for (let i = 1; i <= this.flat.roomsAmount; i += 1) {
            price += this.flat.number * Math.pow(i, MathConstants.E);
        }
        return price;
    }
}
