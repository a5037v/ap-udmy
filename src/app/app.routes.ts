import { Routes, RouterModule } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';

// Tarea 2
import { RegisterComponent } from './login/register.component';



// Se define arreglo de rutas
const appRoutes: Routes = [
    /* {   // Aquí se define la ruta raíz pero también
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
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }, */
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    /*
    // Las siguientes rutas estaban definidas originalmente aquí
    // pero ahora se mueven a la children de PagesComponent
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'graficas1', component: Graficas1Component },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    */

    { path: '**', component: NopagefoundComponent }
]

// en este caso estamos también agregando el uso del hash
// bien se pudo dejar la linea de código sin elhash pero el 
// instructor indicó que prefiere usar hashh

// LAS RUTAS SE USAN EN EL app.module.ts
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true });
