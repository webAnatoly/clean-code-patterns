import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'clean-code';

    constructor(private appService: AppService) {

    }

    public ngOnInit() {
        this.appService.initObjects();
    }
}
