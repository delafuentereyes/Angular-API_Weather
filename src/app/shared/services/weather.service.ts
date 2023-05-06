import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  //obtener el clima actual de una ciudad
  getActualWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=beijing&appid=33d08068b5c9f52c73fca1d1c78f78c8&units=metric&lang=en');
  }

  //obtener el pronostico del clima de una ciudad
  getPronosticWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=beijing&appid=33d08068b5c9f52c73fca1d1c78f78c8');
  }
}
