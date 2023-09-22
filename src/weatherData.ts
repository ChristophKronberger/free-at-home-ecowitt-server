import {WeatherDataForm} from "./weatherDataForm";

export class WeatherData {
    timestamp?: Date;
    temperatureIn: number;
    humidityIn: number;
    pressureRelativeIn: number;
    pressureAbsIn: number;
    temperatureOut: number;
    humidityOut: number;
    windGust: number;
    windSpeed: number;
    winddir: number;
    rainRaite: number;

    constructor(form: WeatherDataForm) {
        // this.timestamp = this.parseDate(form.date);
        this.temperatureIn = this.fahreinheitToCelsius(form.tempinf);
        this.humidityIn = form.humidityin;
        this.pressureRelativeIn = this.inHgToHpa(form.baromrelin);
        this.pressureAbsIn = this.inHgToHpa(form.baromabsin);
        this.temperatureOut = this.fahreinheitToCelsius(form.tempf);
        this.humidityOut = form.humidity;
        this.windGust = this.mphToKmH(form.windgustmph);
        this.windSpeed = this.mphToKmH(form.windspeedmph);
        this.winddir = form.winddir;
        this.rainRaite = form.rainratein;
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
