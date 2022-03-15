import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { IBaseObject } from '../objectCreator/objects.interfaces';

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
    @Input() realEstateObjects: any[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
