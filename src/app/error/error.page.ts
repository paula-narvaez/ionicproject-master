import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {


  pageTile = 'Pagina 404'
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
