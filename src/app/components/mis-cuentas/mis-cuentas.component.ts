import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Tarjeta} from '../../models/tarjeta'; //IMPORTAR EL MODELO TARJETA
import { TarjetaService } from '../../services/tarjeta.service';//IMPORTAR EL SERVICIO DE TARJETAS ENCARGADO DE REALIZAR LAS PETICIONES GET
import { HttpClient, HttpHeaders } from '@angular/common/http';//IMPORTAR COMMON PARA PODER REALIZAR PETICIONES HTTP

@Component({
  selector: 'app-mis-cuentas',
  templateUrl: './mis-cuentas.component.html',
  styleUrls: ['./mis-cuentas.component.css'],
  providers:[
    TarjetaService
  ]
})
export class MisCuentasComponent implements OnInit {
  public url:string;

  public tarjeta: Tarjeta;
  public tarjetas: any;
  public movimientos: any;

  public datos: any;

  public saldo_general:string;
  public total_ingresos:string;
  public total_gastos:string;

  public status:string;

  constructor(private _http: HttpClient, private _tarjetaService: TarjetaService, private _router: Router, private _route: ActivatedRoute) {
     this.saldo_general = "2,000.00";
     this.total_ingresos = "8,000.00";
     this.total_gastos = "6,000.00";

     //SE CARGA EL OBJETO DESDE EL MODELO Tarjeta 
    this.tarjeta = new Tarjeta('1', '', '', '', '', '', '', '', '');

  }

  ngOnInit() {
    //EJECUTAR LOS METODOS AL CARGAR LA PAGINA
    this.getDatosPersona();
    this.getDatosTarjeta();
    this.getDatosMovimientos();
  }

  //METODO QUE SE EJECUTA CON EL EVENTO DE CLIC EN EL BOTON DE GUARDAR TARJETA
  onSubmit(form){
    console.log(this.tarjeta);
    
    alert(JSON.stringify(this.tarjeta));
    form.reset();
    this._router.navigate(['/home']);
  }

  //METODO QUE OBTIENE LOS DAT0S DEL USAURIO DESDE /services/tarjeta.service.ts
  getDatosPersona(){
    this._tarjetaService.getDatos().subscribe(
      Response => {
        if(Response){
          this.status = 'success';
          
          for (var i in Response) {
            this.saldo_general = Response[i]['saldo_general'];
            this.total_ingresos = Response[i]['ingresos'];
            this.total_gastos = Response[i]['gastos'];
          }
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );

  }

//METODO QUE OBTIENE LOS DAT0S DE LAS TARJETAS DESDE /services/tarjeta.service.ts
  getDatosTarjeta(){

    this._tarjetaService.getTarjetas().subscribe(
      Response => {
        if(Response){
          this.status = 'success';
          
          this.tarjetas = Response;
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  //METODO QUE OBTIENE LOS MOVIMIENTOS DESDE /services/tarjeta.service.ts
  getDatosMovimientos(){
    this._tarjetaService.getMovimientos().subscribe(
      Response => {
        if(Response){
          this.status = 'success';
          this.movimientos = Response;
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );

  }

}
