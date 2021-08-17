import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from "@angular/common";
import { routing, appRouingProviders } from './app.routing';
import { NgScormPlayerModule } from 'ng-scorm-player';
import { HttpClientModule } from '@angular/common/http';
import { ScormService } from './services/ScormPlayer-Services';

import { AppComponent } from './app.component';
import { VisualizarScormComponent } from './visualizar-scorm/visualizar-scorm.component';
import { SegundoScormComponent } from './segundo-scorm/segundo-scorm.component';
import { ExeLearningComponent } from './exe-learning/exe-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarScormComponent,
    SegundoScormComponent,
    ExeLearningComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    HttpClientModule,
    routing,
    NgScormPlayerModule.forChild({debug : true})
  ],
  providers: [
    appRouingProviders,
    ScormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
