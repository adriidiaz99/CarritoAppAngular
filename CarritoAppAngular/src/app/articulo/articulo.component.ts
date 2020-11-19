import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/models/Articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  @Input() articulo:Articulo;

  constructor(articulo:Articulo) {
    this.articulo = articulo;
  }

  ngOnInit(): void {
  }

}
