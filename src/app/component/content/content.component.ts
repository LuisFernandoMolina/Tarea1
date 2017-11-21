import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrar:Object[] = [
    { nombre:"Tarjeta 1", descripcion:"Especificaciones de la tarjeta 1", imagen:"./assets/img/zapato1.jpg" },
    { nombre:"tarjeta 2", descripcion:"Especificaciones de la tarjeta 2", imagen:"./assets/img/zapato2.jpg" },
    { nombre:"tarjeta 3", descripcion:"Especificaciones de la tarjeta 3", imagen:"./assets/img/zapato3.jpg" },
    { nombre:"tarjeta 4", descripcion:"Especificaciones de la tarjeta 4", imagen:"./assets/img/zapato4.jpg" },
    { nombre:"tarjeta 5", descripcion:"Especificaciones de la tarjeta 5", imagen:"./assets/img/zapato5.jpg" }
    
  ]
}
