import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { VisualizarScormComponent } from './visualizar-scorm/visualizar-scorm.component';
import { ScormSolisticaComponent } from './scorm-solistica/scorm-solistica.component';

const appRoutes: Routes = [
    {path: '', component: VisualizarScormComponent},
    {path: 'solistica', component: ScormSolisticaComponent},
    {path: '**', component: VisualizarScormComponent}
];

export const appRouingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);