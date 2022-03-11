import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule,
} from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { DetailPageComponent } from '../detail-page/detail-page.component';


const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'detail',
        component: DetailPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainPageRoutingModule {
}
