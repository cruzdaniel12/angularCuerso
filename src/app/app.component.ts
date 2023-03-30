import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
 
  
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;
  
  incrementar(incren:number){
    this.base += incren;
  }

  acumular(valor: number){ 
    this.numero += valor;
  }
// esta forma tambien se puede aplicar pera la primera es mas corta
  //sumar(){
   // this.numero += 1;
  //}
  //restar(){
   // this.numero -= 1;
  //}
}
