import { IGarage } from './objects.interfaces';

export class Garage {
    private readonly garage: IGarage;

    constructor(options: IGarage) {
        this.garage = { ...options }
    }

    public computeCost(): number {
        return this.garage.number * (Math.sqrt(this.garage.parkingNumber) / this.garage.sectionNumber);
    }
}
