
import {FreeAtHome, WeatherStationChannels} from "@busch-jaeger/free-at-home";
const freeAtHome = new FreeAtHome();
freeAtHome.activateSignalHandling();
export class WeatherStationManager {
    private static instance: WeatherStationManager;
    // @ts-ignore
    private station: WeatherStationChannels;

    private constructor(stationName :string) {
        freeAtHome.createWeatherStationDevice("WS1", stationName)
            .then(e => this.station = e);
    }

    public static getInstance(name: string){
        if(!WeatherStationManager.instance){
            WeatherStationManager.instance = new WeatherStationManager(name);
        }
        return WeatherStationManager.instance;
    }

    public get() :WeatherStationChannels {
        return this.station;
    }
}