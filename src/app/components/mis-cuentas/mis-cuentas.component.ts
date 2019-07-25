import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Tarjeta} from '../../models/tarjeta';

@Component({
  selector: 'app-mis-cuentas',
  templateUrl: './mis-cuentas.component.html',
  styleUrls: ['./mis-cuentas.component.css']
})
export class MisCuentasComponent implements OnInit {

  public tarjeta: Tarjeta;

  public saldo_general:string;
  public total_ingresos:string;
  public total_gastos:string;

  constructor(private _router: Router, private _route: ActivatedRoute) {
     this.saldo_general = "2,000.00";
     this.total_ingresos = "8,000.00";
     this.total_gastos = "6,000.00";

     this.tarjeta = new Tarjeta('1', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.tarjeta);
    form.reset();
    this._router.navigate(['/#']);
  }

}
