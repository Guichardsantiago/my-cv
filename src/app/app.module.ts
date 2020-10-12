import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, BodyComponent } from 'src/components/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatDividerModule, MatStepperModule} from '@angular/material';
import { RatingComponent } from 'src/components/rating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RatingComponent
  ],
  imports: [
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
