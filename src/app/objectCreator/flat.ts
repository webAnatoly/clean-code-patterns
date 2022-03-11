import {
    IFlat,
} from './objects.interfaces';
import { MathConstants } from './objects.interfaces';

export class Flat {

    private readonly _id: string;
    private readonly number: number;
    private readonly sectionNumber: number;
    private readonly floorNumber: number;
    private readonly houseNumber: number;
    private readonly complexMod: string;
    private readonly roomsAmount: number;
    private readonly decorationType: string;

    constructor(options: IFlat) {
         this._id = options._id;
         this.number = options.number;
         this.sectionNumber = options.sectionNumber;
         this.floorNumber = options.floorNumber;
         this.houseNumber = options.houseNumber;
         this.complexMod = options.complexMod;
         this.roomsAmount = options.roomsAmount;
         this.decorationType = options.decorationType;
    }

    public computeCost(): number {
        let price = 0;
        for (let i = 1; i <= this.roomsAmount; i += 1) {
            price += this.number * Math.pow(i, MathConstants.E);
        }
        return price;
    }
}
