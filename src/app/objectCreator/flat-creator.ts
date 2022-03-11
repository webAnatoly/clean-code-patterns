import {
    IBaseObject,
    IFlat,
    IGarage,
    IObjectBuilder,
    IOffice,
} from './objects.interfaces';
import { Flat } from './flat';

/**
 * Классы Конкретного Строителя следуют интерфейсу Строителя (в моём случае это интерфейс IObjectBuilder)
 * и предоставляют конкретные реализации шагов построения. Ваша программа может иметь несколько
 * вариантов Строителей, реализованных по-разному.
 */
export class FlatCreator implements IObjectBuilder {

    private product: Flat | null = null;

    constructor() { }

    public reset() {
        this.product = null;
    }

    public produceFlat(options: IFlat): void {
        this.product = new Flat(options);
    }

    public produceBaseObject(options: IBaseObject): void {
    }

    public produceGarage(options: IGarage): void {
    }

    public produceOffice(options: IOffice): void {
    }
}
