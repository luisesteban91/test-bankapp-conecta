import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TarjetaService } from './services/tarjeta.service';//servicio 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    TarjetaService
  ]
})
export class AppComponent {
  title = 'test-bankapp-conecta';

  public nombre:string;
  public ultima_conexion:string;

  constructor(private _tarjetaService: TarjetaService, private _route: ActivatedRoute) {

    this.nombre = "";
     this.ultima_conexion = "";
 }

 ngOnInit() {
   this.getDatosPersona();
 }

 getDatosPersona(){
  this._tarjetaService.getDatosUser().subscribe(
    Response => {
      if(Response){
        
        for (var i in Response) {
          this.nombre = Response[i]['nombre'];
          this.ultima_conexion = Response[i]['ultima_sesion'];
        }

        //form.reset();
        //this._router.navigate(['/#']);
      }
    },
    error => {
      console.log(error);
    }
  );
 }

}
