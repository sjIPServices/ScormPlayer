import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRouingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Librerias - Servicios
import { NgScormPlayerModule } from 'ng-scorm-player';
import { ScormService } from './services/ScormPlayer-Services';

// Componentes
import { VisualizarScormComponent } from './visualizar-scorm/visualizar-scorm.component';
import { ScormSolisticaComponent } from './scorm-solistica/scorm-solistica.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarScormComponent,
    ScormSolisticaComponent
  ],
  imports: [
    BrowserModule,
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
