import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Ironman','Hulk','Spierman','Thor'];
  hborrado :string='';
 
  eliminaHeroe():void{
    this.hborrado=this.heroes.shift() || '';  
  }
  
  
}
