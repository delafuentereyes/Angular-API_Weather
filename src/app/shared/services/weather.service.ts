import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //url = 'http://api.openweathermap.org/data/2.5/weather'
  //apiKey = '33d08068b5c9f52c73fca1d1c78f78c8'

  constructor(private http: HttpClient) {}

  //obtener el clima actual de una ciudad en concreto
  getCurrentWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=santiago&appid=33d08068b5c9f52c73fca1d1c78f78c8&units=metric&lang=en');
  }

  //obtener el pronostico del clima de una ciudad
  getPronosticWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=santiago&appid=33d08068b5c9f52c73fca1d1c78f78c8');
  }

  /*obtener el clima actual de una ciudad según la ubicación del usuario
  getWeatherByCoords(lat: string | number | boolean, lon: string | number | boolean){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }

  getForecastByCoords(lat: string | number | boolean, lon: string | number | boolean) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey);

    return this.http.get(`${this.url}/forecast`, { params });
  }*/
}
