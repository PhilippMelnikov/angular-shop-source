import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdToolbarModule, MdButtonModule, MdMenuModule, MdSidenavModule, MdCardModule} from '@angular/material';
import { TreeModule } from 'angular-tree-component';
import { TreeService} from './tree-service/tree.service';
import { WindowService} from './window-service/window.service';
import { DataService } from "./data-service/data.service"
import 'hammerjs';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,
    MdCardModule
  ],
  providers: [TreeService, WindowService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
