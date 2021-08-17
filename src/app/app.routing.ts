import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarScormComponent } from './visualizar-scorm/visualizar-scorm.component';
import { SegundoScormComponent } from './segundo-scorm/segundo-scorm.component';
import { ExeLearningComponent } from './exe-learning/exe-learning.component';

const appRoutes: Routes = [
    {path: '', component: VisualizarScormComponent},
    {path: 'primero', component: VisualizarScormComponent},
    {path: 'segundo', component: SegundoScormComponent},
    {path: 'exe', component: ExeLearningComponent},
    {path: '**', component: VisualizarScormComponent}
];

export const appRouingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);