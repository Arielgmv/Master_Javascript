import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike', 'Airmax', 'Blanco', 75, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, false),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negro', 180, false),
            new Zapatilla('Nike Modern', 'Nike', 'Negro', 105, true),
            new Zapatilla('Tiger', 'Fila', 'Blanco', 88, true),
            new Zapatilla('Lion', 'Adidas', 'Rojo', 98, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }            
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
       this.marcas.push(this.mi_marca); 
    }

    borrarMarca(index){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }
}