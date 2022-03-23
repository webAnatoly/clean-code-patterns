import { IGarage } from './objects.interfaces';

export class Garage implements IGarage {
    public readonly _id: string;
    public readonly number: number;
    public readonly sectionNumber: number;
    public readonly parkingNumber: number;
    public readonly holdingCapacity: number;
    public readonly withRepairPit: boolean;
    public readonly floorNumber: number;
    public readonly houseNumber: number;
    public readonly area: number;
    public readonly date: string;

    constructor(options: IGarage) {
        this._id = options._id;
        this.number = options.number;
        this.sectionNumber = options.sectionNumber;
        this.parkingNumber = options.parkingNumber;
        this.holdingCapacity = options.holdingCapacity;
        this.withRepairPit = options.withRepairPit;
        this.floorNumber = options.floorNumber;
        this.houseNumber = options.houseNumber;
        this.area = options.area ?? -1;
        this.date = options.date ?? '';
    }

    public computeCost(): number {
        return this.number * (Math.sqrt(this.parkingNumber) / this.sectionNumber);
    }
}
