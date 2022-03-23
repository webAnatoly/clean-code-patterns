import {
    IFlat,
} from './objects.interfaces';
import { MathConstants } from './objects.interfaces';

export class Flat implements IFlat {

    public readonly _id: string;
    public readonly number: number;
    public readonly sectionNumber: number;
    public readonly floorNumber: number;
    public readonly houseNumber: number;
    public readonly complexMod: string;
    public readonly roomsAmount: number;
    public readonly decorationType: string;
    public readonly area: number;
    public readonly date: string;

    constructor(options: IFlat) {
         this._id = options._id;
         this.number = options.number;
         this.sectionNumber = options.sectionNumber;
         this.floorNumber = options.floorNumber;
         this.houseNumber = options.houseNumber;
         this.complexMod = options.complexMod;
         this.roomsAmount = options.roomsAmount;
         this.decorationType = options.decorationType;
         this.area = options.area ?? -1;
         this.date = options.date ?? '';
    }

    public computeCost(): number {
        let price = 0;
        for (let i = 1; i <= this.roomsAmount; i += 1) {
            price += this.number * Math.pow(i, MathConstants.E);
        }
        return price;
    }
}
