import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRouingProviders } from './app.routing';
import { NgScormPlayerModule } from 'ng-scorm-player';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VisualizarScormComponent } from './visualizar-scorm/visualizar-scorm.component';
import { SegundoScormComponent } from './segundo-scorm/segundo-scorm.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarScormComponent,
    SegundoScormComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgScormPlayerModule.forChild({debug : true}),
    HttpClientModule
  ],
  providers: [
    appRouingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
