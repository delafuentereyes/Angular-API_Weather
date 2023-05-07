import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService){ }

  /*lat!: number;
  lon!: number;
  weather!: any;
  forecast!: any;*/

  units: string = 'metric';
  pronostic: any;
  //hago un mapeado en la variable para traer lo que quiero de la API
  actualWeather: any = {
    name: '',
    temp: '',
    feels_like: '',
    icon: '',
    weatherDetails: {}
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather()
      .subscribe(
        (data: any) => {
          this.actualWeather.name = data.name;
          this.actualWeather.temp = data.main.temp;
          this.actualWeather.feels_like = data.main.feels_like;
          this.actualWeather.icon = data.weather[0].icon;
          this.actualWeather.weatherDetails = data.weather[0];
        }
      );
    //this.getWeatherLocation();
    //this.getWeatherForecast();
    this.getPronostic();
  }

  setUnits(units: string) {
    this.units = units;
  }

  /*obtener el clima actual según la ubicación
  getWeatherLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
        })
      })
    }
  }*/

  /*getWeatherForecast() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getForecastByCoords(this.lat, this.lon).subscribe(data => {
          this.forecast = data;
          console.log(data);
        });
      });
    }
  }*/

  //obtener el pronostico del clima
  getPronostic() {
    this.weatherService.getPronosticWeather()
      .subscribe(
        (data: any) => {
          this.pronostic = data;
          console.log(data);
        }
      );
  }

  //pasar de celsius a farenheit y viceversa
  showTemperature(temp: number): string {
    if (this.units === 'metric') {
      return temp.toFixed(1) + ' °C';
    } else if (this.units === 'imperial') {
      const tempF = (temp * 9 / 5) + 32;
      return tempF.toFixed(1) + ' °F';
    } else {
      return '';
    }
  }

  /*
  método para mostrar los grados en Celsius
  kelvinToCelsius(temp: number): string {
    const celsius = temp - 273.15;
    return `${celsius.toFixed(1)} °C`;
  }
  */
}
