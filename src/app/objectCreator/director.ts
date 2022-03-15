import {
    IBaseObject,
    IFlat,
    IGarage,
    IObjectBuilder,
    IOffice,
} from './objects.interfaces';

export class Director {
    private builder: IObjectBuilder;

    constructor(defaultBuilder: IObjectBuilder) {
        this.builder = defaultBuilder;
    }

    /**
     * Директор работает с любым экземпляром строителя, который передаётся ему
     * клиентским кодом. Таким образом, клиентский код может изменить конечный
     * тип вновь собираемого продукта.
     */
    public setBuilder(builder: IObjectBuilder): void {
        this.builder = builder;
    }

    /**
     * Директор может строить несколько вариаций продукта, используя одинаковые
     * шаги построения.
     */
    public buildBaseObject(options: IBaseObject): void {
        this.builder.reset();
        this.builder.produceBaseObject(options);
    }

    public buildFlat(options: IBaseObject | IFlat): void {
        this.builder.reset();
        this.builder.produceFlat(options);
    }

    public buildOffice(options: IBaseObject | IOffice): void {
        this.builder.reset();
        this.builder.produceOffice(options);
    }

    public buildGarage(options: IBaseObject | IGarage): void {
        this.builder.reset();
        this.builder.produceGarage(options);
        // тут еще могут быть шаги, модифицирующие объект и эти шаги должны быть прописаны в интерфейсе IObjectBuilder
    }
}
