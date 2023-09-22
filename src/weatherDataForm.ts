
export
class WeatherDataForm {
    passkey!: string;
    stationtype!: string;
    tempinf!: number;
    humidityin!: number;
    baromrelin!: number;
    baromabsin!: number;
    tempf!: number;
    humidity!: number;
    temp1f!: number;
    humidity1!: number;
    temp2f!: number;
    humidity2!: number;
    windspeedmph!: number;
    rainratein!: number;
    solarradiation!: number;
    uv!: number;
    wh65batt!: number;
    freq!: string;
    model!: string;

    constructor(data: any) {
        // Assuming 'data' is an object with corresponding properties
        Object.assign(this, data);
    }
}
