import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { ListObjectsComponent } from '../../list-objects/list-objects.component';


@NgModule({
    declarations: [
        MainPageComponent,
        ListObjectsComponent,
    ],
    imports: [
        CommonModule,
        MainPageRoutingModule,
    ],
})
export class MainPageModule {
}
