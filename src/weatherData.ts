import {WeatherDataForm} from "./weatherDataForm";

export class WeatherData {
    timestamp?: Date;
    temperatureIn: number;
    humidityIn: number;
    pressureRelativeIn: number;
    pressureAbsIn: number;
    temperatureOut: number;
    humidityOut: number;
    windSpeed: number;
    rainRaite: number;
    tempChannel1: number;
    tempChannel2: number;
    humidityChannel1: number;
    humidityChannel2: number;

    constructor(form: WeatherDataForm) {
        // this.timestamp = this.parseDate(form.date);
        this.temperatureIn = this.fahreinheitToCelsius(form.tempinf);
        this.humidityIn = form.humidityin;
        this.pressureRelativeIn = this.inHgToHpa(form.baromrelin);
        this.pressureAbsIn = this.inHgToHpa(form.baromabsin);
        this.temperatureOut = this.fahreinheitToCelsius(form.tempf);
        this.humidityOut = form.humidity;
        this.windSpeed = this.mphToKmH(form.windspeedmph);
        this.rainRaite = form.rainratein;
        this.tempChannel1 = this.fahreinheitToCelsius(form.temp1f);
        this.tempChannel2 = this.fahreinheitToCelsius(form.temp2f);
        this.humidityChannel1 = form.humidity1;
        this.humidityChannel2 = form.humidity2;

    }

    private parseDate(dateString: string): Date {
        const [year, month, day, hour, minute, second] = dateString
            .split(/[- :]/)
            .map((part) => parseInt(part, 10));

        return new Date(year, month - 1, day, hour, minute, second);
    }

    private fahreinheitToCelsius(f: number): number {
        return (f - 32) * 5 / 9;
    }

    private mphToKmH(mph: number): number {
        return mph * 1.609344;
    }

    private inHgToHpa(inHg: number): number {
        return (inHg  / 29.53 ) * 1000;
    }
}
