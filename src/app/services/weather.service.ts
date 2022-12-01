import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apyKey = '867b1a04e05d2092aeb47a2df6c344bb'
  URL:string='';

  constructor(private http: HttpClient){
    this.URL='https:api.openweathermap.org/data/2.5/weather?appid='+this.apyKey+'&q=';
  }


  getWeather(cityName:string, countryCode:string){
    return this.http.get('${this.URL}${cityName},${countryCode}');
  }
}
