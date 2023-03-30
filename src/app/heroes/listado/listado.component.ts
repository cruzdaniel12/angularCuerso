import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

    heroes: string[] = ['Spiderman', 'Iroman', 'Loki', 'Thor', 'Capitan America' ];
    heroeBorrado: string= ''  ;


    borrarHeroe(){
     
      this.heroeBorrado = this.heroes.shift() || '';


     // console.log(heroeBorrado);
    }

}
