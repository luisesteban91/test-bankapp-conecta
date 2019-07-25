//importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { MisCuentasComponent } from './components/mis-cuentas/mis-cuentas.component';
//import { LoginComponent } from './components/login/login.component';
//import { RegisterComponent } from './components/register/register.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: MisCuentasComponent },
    {path: 'home', component: MisCuentasComponent },
    //{path: 'login', component: LoginComponent },
    //{path: 'registro', component: RegisterComponent },
    //{path: '**', component:LoginComponent } //cuando no existe la ruta
];

//Exportar configiuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);