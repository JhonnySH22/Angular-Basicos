import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: ` 
        <h1> El {{ title }} es: {{ cantidad }}</h1>
        <h2> La base es: <strong> {{ base }} </strong></h2>
        <button (click)="conteo( -base )"> -{{ base }}</button>
        <span>{{ cantidad }}</span>
        <button (click)="conteo( +base )"> +{{ base }}</button>
        `
})




export class ContadorComponent {
    title: string = 'Conteo';
    cantidad: number = 10;
    base: number = 5;

    conteo(valor: number) {
        this.cantidad += valor;

    }
}