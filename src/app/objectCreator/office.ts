import { IOffice } from './objects.interfaces';

export class Office implements IOffice {

    public readonly _id: string;
    public readonly number: number;
    public readonly sectionNumber: number;
    public readonly floorNumber: number;
    public readonly houseNumber: number;
    public readonly roomsAmount: number;
    public readonly decorationType: string;
    public readonly atBusinessComplex: boolean;
    public readonly area: number;
    public readonly date: string;

    constructor(options: IOffice) {
        this._id = options._id;
        this.number = options.number;
        this.sectionNumber = options.sectionNumber;
        this.floorNumber = options.floorNumber;
        this.houseNumber = options.houseNumber;
        this.roomsAmount = options.roomsAmount;
        this.decorationType = options.decorationType;
        this.atBusinessComplex = options.atBusinessComplex;
        this.area = options.area ?? -1;
        this.date = options.date ?? '';
    }

    public computeCost(): number {
        return (this.number * this.roomsAmount) /
            (this.floorNumber * Math.sqrt(this.houseNumber + this.sectionNumber));
    }
}
