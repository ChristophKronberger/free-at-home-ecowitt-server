import {WeatherData} from "./weatherData";
import {WeatherStationChannels} from "@busch-jaeger/free-at-home";
import {TemperatureDeviceManager} from "./temperatureDeviceManager";

export class WeatherFreeAtHomeBridge {

    public static update(data : WeatherData, station:WeatherStationChannels, channel1:TemperatureDeviceManager){
        station.wind.setWindSpeed(data.windSpeed);
        station.temperature.setTemperature(data.temperatureOut);
        station.rain.setIsRaining(data.rainRaite > 0);
        station.brightness.setBrightnessLevel(data.brightness);
        channel1.getH1().setHumidity(data.humidityChannel1.toString());
        channel1.getT1().setTemperature(data.tempChannel1.toString());
    }
}