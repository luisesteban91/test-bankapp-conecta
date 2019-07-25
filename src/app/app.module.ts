import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from '../app/routing';

import { AppComponent } from './app.component';
import { MisCuentasComponent } from './components/mis-cuentas/mis-cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    MisCuentasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
