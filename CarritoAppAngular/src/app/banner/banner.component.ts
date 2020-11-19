import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generarBanner(caracter:string){
    if(caracter === "h"){
      return "/assets/img/hombre.jpg";
    } else if(caracter === "m"){
      return "/assets/img/mujer.jpg";
    }

    return "";
  }

}
