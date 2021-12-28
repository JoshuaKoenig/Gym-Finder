import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    MapComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule
  ],
  exports: [
    MapComponent,
    HeaderComponent
  ]
})
export class FeaturesModule { }
