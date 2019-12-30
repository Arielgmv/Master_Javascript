import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike', 'Airmax', 'Blanco', 75, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, false),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negro', 180, false),
            new Zapatilla('Nike Modern', 'Nike', 'Negro', 105, true),
            new Zapatilla('Tiger', 'Fila', 'Blanco', 88, true),
            new Zapatilla('Lion', 'Adidas', 'Rojo', 98, false)
        ];        
    }

    getTexto(){
        return "Hola Mundo desde un servicio";
    }
    
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}