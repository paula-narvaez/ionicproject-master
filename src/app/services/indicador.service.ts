import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { url } from 'inspector';
import { $ } from 'protractor'; 

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  urlEndPoint = 'https://mindicador.cl/api';

  constructor(private httpClient: HttpClient) { }

  Controller($scope, $http) {
    $http.get(this.urlEndPoint).success(function(data){
        $scope.dailyIndicators = data;
    }).error(function() {
          console.log('error al consumir api');

      });
    }

    obtenerIndicadores(): Promise<any>{
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.urlEndPoint).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }

    obtenerIndicador(indicador: string , fecha: any): Promise<any> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.urlEndPoint + '/' + indicador + '/' + fecha).subscribe(data => {
          resolve(data);
        }, error => {
          rejects(error);
        });
      });  
       

    
    }



}
