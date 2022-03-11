import { IGarage } from './objects.interfaces';

export class Garage {
    private readonly _id: string;
    private readonly number: number;
    private readonly sectionNumber: number;
    private readonly parkingNumber: number;
    private readonly holdingCapacity: number;
    private readonly withRepairPit: boolean;

    constructor(options: IGarage) {
        this._id = options._id;
        this.number = options.number;
        this.sectionNumber = options.sectionNumber;
        this.parkingNumber = options.parkingNumber;
        this.holdingCapacity = options.holdingCapacity;
        this.withRepairPit = options.withRepairPit;
    }

    public computeCost(): number {
        return this.number * (Math.sqrt(this.parkingNumber) / this.sectionNumber);
    }
}
