import { IOffice } from './objects.interfaces';

export class Office {

    private readonly _id: string;
    private readonly number: number;
    private readonly sectionNumber: number;
    private readonly floorNumber: number;
    private readonly houseNumber: number;
    private readonly roomsAmount: number;
    private readonly decorationType: string;
    private readonly atBusinessComplex: boolean;

    constructor(options: IOffice) {
        this._id = options._id;
        this.number = options.number;
        this.sectionNumber = options.sectionNumber;
        this.floorNumber = options.floorNumber;
        this.houseNumber = options.houseNumber;
        this.roomsAmount = options.roomsAmount;
        this.decorationType = options.decorationType;
        this.atBusinessComplex = options.atBusinessComplex;
    }

    public computeCost(): number {
        return (this.number * this.roomsAmount) /
            (this.floorNumber * Math.sqrt(this.houseNumber + this.sectionNumber));
    }
}
