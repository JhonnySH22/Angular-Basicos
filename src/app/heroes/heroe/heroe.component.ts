import { Component } from "@angular/core";

@Component({

    selector: 'app-heroe',
    templateUrl: './heroe.component.html'

})
export class HeroeComponent {
    nombre: string = 'Hiroman';
    edad: number = 45;

    get getCapi(): string{
        return this.nombre.toUpperCase();
    }

    obtenerInfo():string{

        return `${this.nombre} - ${this.edad}`
    }

    cambiarEddad():void{
        this.edad = 21;
     }
     cambiarNombre():void{
        this.nombre = 'Spiderman';
     }

}
