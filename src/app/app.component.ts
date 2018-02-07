import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Block One | DOCS';

    constructor(private location: Location) { }

    isActive(path: string) {
        return this.location.path().indexOf(path) > -1;
    }
}
