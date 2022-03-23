import {
    Component,
    OnInit,
} from '@angular/core';
import { AppService } from '../../app.service';
import { Flat } from '../../objectCreator/flat';
import { Office } from '../../objectCreator/office';
import { Garage } from '../../objectCreator/garage';
import { GarageCreator } from '../../objectCreator/garage-creator';
import { FlatCreator } from '../../objectCreator/flat-creator';
import { Director } from '../../objectCreator/director';
import { IFlat } from '../../objectCreator/objects.interfaces';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

    realEstateObjects: Flat[] | Office[] | Garage[] = [];

    constructor(private appService: AppService) { }

    ngOnInit(): void {
        this.realEstateObjects = this.prepareFlats(this.appService.getRealEstateObjects('flats') as IFlat[]);
    }

    public prepareFlats(flatsData: IFlat[]): Flat[] {
        const result: Flat[] = [];
        const flatBuilder = new FlatCreator();
        const director = new Director(flatBuilder);
        director.setBuilder(flatBuilder);
        flatsData.forEach((flatData: IFlat) => {
            director.buildFlat({...flatData});
            const currentObject = flatBuilder.getProduct();
            if (currentObject) {
                result.push(currentObject);
            }
        });
        return result;
    }

}
