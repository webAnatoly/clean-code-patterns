export interface IBaseObject {
    _id: string,
    number: number,
    sectionNumber: number,
}

export interface IFlat extends IBaseObject {
    floorNumber: number,
    houseNumber: number,
    complexMod: string,
    roomsAmount: number,
    decorationType: string,
}

export interface IOffice extends IBaseObject {
    floorNumber: number,
    houseNumber: number,
    roomsAmount: number,
    decorationType: string,
    atBusinessComplex: boolean,
}

export interface IGarage extends IBaseObject {
    parkingNumber: number,
    holdingCapacity: number,
    withRepairPit: boolean,
}

/*
В рамках паттерна "Строитель" здесь предпологается, что должны быть все возможные и необходимые шаги создания объекта.
Идея в том, что в каких-то вариациях некоторые шаги могут быть пропущены.
И при этом каждый шаг возвращает рабочею версию продукта.
*/
export interface IObjectBuilder {
    reset(): void;
    produceBaseObject(options: IBaseObject): void;
    produceFlat(options: IFlat): void;
    produceOffice(options: IOffice): void;
    produceGarage(options: IGarage): void;
}
