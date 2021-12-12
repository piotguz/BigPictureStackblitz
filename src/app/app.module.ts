import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './main-page/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageModalComponent } from './main-page/main-page-modal/main-page-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MainPageComponent } from './main-page/main-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCardComponent } from './main-page/main-page-modal/dialog-card/dialog-card.component';
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainPageModalComponent,
    MainPageComponent,
    DialogCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule ,
    FormsModule,
  ],
  providers: [GoogleMapsModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
