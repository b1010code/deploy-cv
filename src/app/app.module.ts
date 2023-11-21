import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnAnimeComponent } from './component/btn-anime/btn-anime.component';
import { CvComponent } from './component/cv/cv.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { IntroComponent } from './component/intro/intro.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnAnimeComponent,
    CvComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    StepperComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
