import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarScormComponent } from './visualizar-scorm/visualizar-scorm.component';

const appRoutes: Routes = [
    {path: '', component: VisualizarScormComponent},
    {path: 'VisualizarScorm', component: VisualizarScormComponent},
    {path: '**', component: VisualizarScormComponent}
];

export const appRouingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);