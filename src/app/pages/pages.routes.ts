import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Este archivo implementa las RUTAS donde se tendrán
// las rutas del PAGES
// No se coloca en el app.routes para que no se complique,
// para que no crezca tanto ese archivo y se tenga repartido



const pagesRoutes: Routes = [

    {   // Aquí se define la ruta raíz pero también
        // se definen subrutas o rutas hijas
        // NOTA. originalmente teníamos aquí estas referencias
        // PERO SE MOVIERON a pages.routes para aligerar la
        // cantidad de l+ineas aquí
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'incrementador', component: IncrementadorComponent },
            { path: 'grafico-dona', component: GraficoDonaComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },

];

// Exportamos las rutas hijas
// Se importan en pages.module
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
