import { Injectable } from '@angular/core';
import { Director } from './objectCreator/director';
import { FlatCreator } from './objectCreator/flat-creator';
import { OfficeCreator } from './objectCreator/office-creator';
import { GarageCreator } from './objectCreator/garage-creator';

@Injectable({
    providedIn: 'root',
})
export class AppService {

    director: Director;

    constructor() {
        const defaultObjectBuilder = new FlatCreator();
        this.director = new Director(defaultObjectBuilder);
    }

    initObjects() {

        // В реальном приложении данные для инициализации будут либо с сервера приходить. Либо из полей формы.
        // Тут я просто в цикле их создаю с рандомными значениями.
        if (!localStorage.getItem('flats')) {
            const flatObjectBuilder = new FlatCreator();
            this.director.setBuilder(flatObjectBuilder);
            const flats = [];
            for (let i = 1; i <= 10; i++) {
                this.director.buildFlat({
                    _id: `flat_id_${i}`,
                    number: i,
                    sectionNumber: 1,
                    floorNumber: i,
                    houseNumber: 1,
                    complexMod: 'complexMod',
                    roomsAmount: 1,
                    decorationType: 'decoration type',
                });
                flats.push(flatObjectBuilder.getProduct());
            }
            localStorage.setItem('flats', JSON.stringify(flats));
        }

        if (!localStorage.getItem('office')) {
            const officeObjectBuilder = new OfficeCreator();
            this.director.setBuilder(officeObjectBuilder);
            const flats = [];
            for (let i = 10; i <= 20; i++) {
                this.director.buildOffice({
                    _id: `office_id_${i}`,
                    number: i,
                    sectionNumber: 1,
                    floorNumber: i,
                    houseNumber: 1,
                    roomsAmount: i,
                    decorationType: 'decoration type',
                    atBusinessComplex: true,
                });
                flats.push(officeObjectBuilder.getProduct());
            }
            localStorage.setItem('office', JSON.stringify(flats));
        }

        if (!localStorage.getItem('garage')) {
            const garageObjectBuilder = new GarageCreator();
            this.director.setBuilder(garageObjectBuilder);
            const flats = [];
            for (let i = 10; i <= 20; i++) {
                this.director.buildGarage({
                    _id: `garage_id_${i}`,
                    number: i,
                    sectionNumber: 1,
                    parkingNumber: i,
                    holdingCapacity: 12,
                    withRepairPit: false,
                });
                flats.push(garageObjectBuilder.getProduct());
            }
            localStorage.setItem('garage', JSON.stringify(flats));
        }
    }
}
