//importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { MisCuentasComponent } from './components/mis-cuentas/mis-cuentas.component';


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: MisCuentasComponent },
    {path: 'home', component: MisCuentasComponent },
    {path: '**', component:MisCuentasComponent } //cuando no existe la ruta
];

//Exportar configiuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);