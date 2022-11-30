import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/api/clima.service';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage  implements OnInit {
  getdata:any[]=[];
  constructor(public _services: ClimaService ) {

    this._services.getdata("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata)

    }

    )

   }

  ngOnInit() {
  }

}




