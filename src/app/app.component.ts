import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router,private weatherService: WeatherService ) {}

  bienvenida(){
    this.router.navigate(['/bienvenida']);
  }

  weather;

  ngOnInit(){
    this.weatherService.getWeather('San Joaquín', 'Santiago')
      .subscribe(
        res=> this.weather=res,
        err=> console.log(err)
      );
  }
  

}
