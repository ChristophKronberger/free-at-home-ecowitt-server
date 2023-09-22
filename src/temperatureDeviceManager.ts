import {
    AirHumidityChannel,
    AirTemperatureChannel,
    FreeAtHome,
    WeatherStationChannels
} from "@busch-jaeger/free-at-home";
import {
    RoomTemperatureControllerChannel
} from "@busch-jaeger/free-at-home/lib/virtualChannels/roomTemperatureControllerChannel";
const freeAtHome = new FreeAtHome();

export class TemperatureDeviceManager {
    private static instance: TemperatureDeviceManager;
    // @ts-ignore
    private humCh1: AirHumidityChannel;
    // @ts-ignore
    private tempCh1: AirTemperatureChannel;

    constructor() {
        freeAtHome.createAirQualityHumidityDevice("CH1H", "Channel 1 Humidity sensor")
            .then(e => this.humCh1 = e);
        freeAtHome.createAirQualityTemperatureDevice("CH1T", "Channel 1 temperature sensor")
            .then(e => this.tempCh1 = e);
    }

    public static getInstance(){
        if(!TemperatureDeviceManager.instance){
            TemperatureDeviceManager.instance = new TemperatureDeviceManager();
        }
        return TemperatureDeviceManager.instance;
    }

    public getT1() :AirTemperatureChannel {
        return this.tempCh1;
    }
    public getH1() :AirHumidityChannel {
        return this.humCh1;
    }
}