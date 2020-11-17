import { Component, OnInit } from '@angular/core';
import { Articulo } from "../../models/Articulo.js";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  listaArticulos:Articulo[];

  constructor() {
    this.listaArticulos = [];
  }

  ngOnInit(): void {
    this.listaArticulos.push(new Articulo(1, "Zapato", "/assets/img/zapatos.jpg", "khwcich", true, 12.5, 9.8, "cbehbedhkc", "S", 12));
  }

  myFunc(){
    console.log("function called");
  }

}
