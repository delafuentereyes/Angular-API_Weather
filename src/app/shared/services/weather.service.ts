import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  //obtener el clima actual de una ciudad
  getActualWeather() {
    return this.http.get('');
  }

  //obtener el pronostico del clima de una ciudad
  getPronosticWeather() {
    return this.http.get('');
  }
}
