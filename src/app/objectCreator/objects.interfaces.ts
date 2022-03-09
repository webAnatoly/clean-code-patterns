export interface BaseObject {
    _id: string,
    number: number,
    sectionNumber: number,
}

export interface Flat extends BaseObject {
    floorNumber: number,
    houseNumber: number,
    complexMod: string,
    roomsAmount: number,
    decorationType: string,
}

export interface Office extends BaseObject {
    floorNumber: number,
    houseNumber: number,
    roomsAmount: number,
    decorationType: string,
    atBusinessComplex: boolean,
}

export interface Garage extends BaseObject {
    parkingNumber: number,
    holdingCapacity: number,
    withRepairPit: boolean,
}
