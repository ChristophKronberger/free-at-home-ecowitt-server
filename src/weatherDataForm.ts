
export
class WeatherDataForm {
    passkey!: string;
    stationtype!: string;
    date!: string;
    tempinf!: number;
    humidityin!: number;
    baromrelin!: number;
    baromabsin!: number;
    tempf!: number;
    humidity!: number;
    winddir!: number;
    windspeedmph!: number;
    windgustmph!: number;
    rainratein!: number;
    eventrainin!: number;
    dailyrainin!: number;
    weeklyrainin!: number;
    monthlyrainin!: number;
    yearlyrainin!: number;
    totalrainin!: number;
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
