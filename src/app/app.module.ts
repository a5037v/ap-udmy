import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// TEMPORAL!!!!
// Se usan como paso solamente para verificar como vamos programando
//  pero conforme se va avanzando, se mueven a otros componentes
// Esto es con el objetivo de dejar lo más ligero posible el app.module
import { FormsModule } from '@angular/forms';

// IMPORTAMOS LAS RUTAS
import { APP_ROUTES } from './app.routes';

// Modules personales
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

/*import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from '.pages/pagesComponent';
*/
 
/*import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';*/
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // NopagefoundComponent,
    /*
    // Las siguientes se comentan porque se llevaron al archivo
    // de rutas general (pages.module)
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    */
    /*
    // Las siguientes se comentan porque se llevaron al archiov
    // de rutas de shared (shared.module)
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
    */
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
