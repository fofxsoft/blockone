import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
    { path: '', redirectTo: '/docs/getting-started', pathMatch: 'full' },
    { path: 'docs', component: DocsComponent },
    { path: 'docs/:section', component: DocsComponent },
    { path: 'docs/:section/:document', component: DocsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
