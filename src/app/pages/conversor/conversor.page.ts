import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'conversor';
  listadoIndicadores: any;
  indicadorEuro: number;
  indicadorDolar: number;
  valorEnEuro: number;
  valorEnDolar: number;
  valor: number = 0;


  constructor() { }

  ngOnInit() {
  }

}
