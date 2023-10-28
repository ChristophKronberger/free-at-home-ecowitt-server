import {WeatherData} from "./weatherData";
import {WeatherStationChannels} from "@busch-jaeger/free-at-home";

export class WeatherFreeAtHomeBridge {

    public static update(data: WeatherData, station: WeatherStationChannels) {
        station.wind.setWindSpeed(data.windSpeed);
        station.temperature.setTemperature(data.temperatureOut);
        station.rain.setIsRaining(data.rainRaite > 0);
        station.brightness.setBrightnessLevel(data.brightness);
        console.log("Setting Keep alive")
        station.wind.triggerKeepAlive().then();
        station.temperature.triggerKeepAlive().then();
        station.rain.triggerKeepAlive().then();
        station.brightness.triggerKeepAlive().then();
    }
}