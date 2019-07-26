import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Tarjeta} from '../../models/tarjeta';
import { TarjetaService } from '../../services/tarjeta.service';//servicio
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

     this.tarjeta = new Tarjeta('1', '', '', '', '', '', '', '', '');

  }

  ngOnInit() {
    this.getDatosPersona();
    this.getDatosTarjeta();
    this.getDatosMovimientos();
  }

  onSubmit(form){
    console.log(this.tarjeta);
    form.reset();
    alert(JSON.stringify(this.tarjeta));
    
    this._router.navigate(['/#']);
  }
  
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

          //form.reset();
          //this._router.navigate(['/#']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );

  }

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
