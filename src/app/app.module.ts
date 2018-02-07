import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EscapeHtmlPipe } from './keep-html.pipe';

import {
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuPanel,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatIcon
} from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DocsComponent } from './docs/docs.component';
import { DocumentService } from "./document.service";

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
