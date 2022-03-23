import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { Flat } from '../objectCreator/flat';
import { Office } from '../objectCreator/office';
import { Garage } from '../objectCreator/garage';

@Component({
    selector: 'app-list-objects',
    templateUrl: './list-objects.component.html',
    styleUrls: ['./list-objects.component.scss'],
})
export class ListObjectsComponent implements OnInit {

    @Input() columnTitles: string[] = [
        'Объект недвижимости',
        'Площадь',
        'Этаж',
        'Дата',
        'Корпус',
        'Вид отделки',
        'Цена',
    ];
    @Input() realEstateObjects: Flat[] | Office[] | Garage[] = [];

    constructor() {
        console.log('test: ', this.realEstateObjects);
    }

    ngOnInit(): void {
    }

}
