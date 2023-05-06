import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService){ }

  pronostic: any;
  //le paso en la misma variable los datos que quiero pintar en la pantalla de home
  actualWeather: any = {
    name: '',
    temp: '',
    feels_like: '',
    icon: '',
    weatherDetails: {}
  };

  ngOnInit(): void {
    this.weatherService.getActualWeather()
      .subscribe(
        (data: any) => {
          this.actualWeather.name = data.name;
          this.actualWeather.temp = data.main.temp;
          this.actualWeather.feels_like = data.main.feels_like;
          this.actualWeather.icon = data.weather[0].icon;
          this.actualWeather.weatherDetails = data.weather[0];
        }
      );
    this.getPronostic();
  }

  //obtener el pronostico del clima
  getPronostic() {
    this.weatherService.getPronosticWeather()
      .subscribe(
        (data: any) => {
          this.pronostic = data;
        }
      );
  }

  //método para mostrar los grados en Celsius
  kelvinToCelsius(temp: number): string {
    const celsius = temp - 273.15;
    return `${celsius.toFixed(1)} °C`;
  }

}
