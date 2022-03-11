import { IGarage } from './objects.interfaces';

export class Garage {
    private readonly garage: IGarage;

    constructor(options: IGarage) {
        this.garage = { ...options }
    }
}
