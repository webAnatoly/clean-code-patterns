import {
    IBaseObject,
    IFlat,
    IGarage,
    IObjectBuilder,
    IOffice,
} from './objects.interfaces';
import { Garage } from './garage';
import { Flat } from './flat';

/**
 * Классы Конкретного Строителя следуют интерфейсу Строителя (в моём случае это интерфейс IObjectBuilder)
 * и предоставляют конкретные реализации шагов построения. Ваша программа может иметь несколько
 * вариантов Строителей, реализованных по-разному.
 */
export class GarageCreator implements IObjectBuilder {

    private product: Garage | null = null;

    constructor() {
        this.reset();
    }

    public reset() {
        this.product = null;
    }

    public produceGarage(options: IGarage): void {
        this.product = new Garage(options);
    }

    public produceBaseObject(options: IBaseObject): void {
    }

    public produceFlat(options: IFlat): void {
    }

    public produceOffice(options: IOffice): void {
    }

    public getProduct(): Garage | null {
        const result = this.product;
        this.reset();
        return result;
    }

}
