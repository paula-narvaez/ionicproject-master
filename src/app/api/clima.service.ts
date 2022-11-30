import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
 
  constructor( public _http: HttpClient) {


  }

  getdata<T> (url: string)

  {
    url = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=8f5760608d6b5b86148c16a9f6f8f3b3'
    return this._http.get<T[]>(url);


  }


}
