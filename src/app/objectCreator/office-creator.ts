import {
    IOffice,
    IObjectBuilder,
    IBaseObject,
    IFlat,
    IGarage,
} from './objects.interfaces';
import { Office } from './office';

/**
 * Классы Конкретного Строителя следуют интерфейсу Строителя (в моём случае это интерфейс IObjectBuilder)
 * и предоставляют конкретные реализации шагов построения. Ваша программа может иметь несколько
 * вариантов Строителей, реализованных по-разному.
 */
export class OfficeCreator implements IObjectBuilder {

    private product: Office | null = null;

    constructor() {
        this.reset();
    }

    public reset() {
        this.product = null;
    }

    public produceOffice(options: IOffice): void {
        this.product = new Office(options);
    }

    public produceBaseObject(options: IBaseObject): void {
    }

    public produceFlat(options: IFlat): void {
    }

    public produceGarage(options: IGarage): void {
    }

    public getProduct(): Office | null {
        const result = this.product;
        this.reset();
        return result;
    }

}
