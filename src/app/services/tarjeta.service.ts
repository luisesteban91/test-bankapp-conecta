import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';// Observable-> poder obtener los datos devueltos por el api
import { Tarjeta } from '../models/tarjeta';
import  { global } from './global';

@Injectable() //decorador para injectar cuaquier propiedad en cualquier componente
export class TarjetaService{
    public url:string;

    constructor(private _http: HttpClient){ //EL _ ES PARA INDICAR QUE ESTO ES UN SERVCIO
        this.url = global.url;
    }
    prueba(){
        return "Hola desde el servicio de angular";
    }

    REGISTER(tarjeta): Observable<any>{
        //converti el objeto del usaurio en string
        let params = JSON.stringify(tarjeta);

        //definir la cabezeras
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        //Haacer la peticion ajax
        return this._http.post(this.url+'register', params, {headers: headers});

    }
    getDatos():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		//7ce411a1-17b6-41e5-b67c-55b3ac5df463
		return this._http.get(this.url + 'fed17b86-497b-4a6e-9388-f38a495dbd43');
    }

    getDatosUser():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		//7ce411a1-17b6-41e5-b67c-55b3ac5df463
		return this._http.get(this.url + '7ce411a1-17b6-41e5-b67c-55b3ac5df463');
    }
    
    getTarjetas():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url + '3d6a976a-42d3-405f-b7fa-6959f51c2ff3');
    }
    
    getMovimientos():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url + '372fdc0a-99c0-47de-bae0-ed2b856cce62');
	}
}
