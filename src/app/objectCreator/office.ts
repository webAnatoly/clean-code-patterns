import { IOffice } from './objects.interfaces';

export class Office {

    private readonly office: IOffice;

    constructor(options: IOffice) {
        this.office = { ...options }
    }

    public computeCost(): number {
        return (this.office.number * this.office.roomsAmount) /
            (this.office.floorNumber * Math.sqrt(this.office.houseNumber + this.office.sectionNumber));
    }
}
