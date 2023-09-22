import {WeatherData} from "./weatherData";
import {WeatherStationChannels} from "@busch-jaeger/free-at-home";

export class WeatherFreeAtHomeBridge {

    public static update(data : WeatherData, station:WeatherStationChannels){
        station.wind.setWindSpeed(data.windSpeed);
        station.temperature.setTemperature(data.temperatureOut);
        station.rain.setIsRaining(data.rainRaite > 0);
    }
}