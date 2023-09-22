
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

        if (process.platform === "win32") {
            var rl = require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.on("SIGINT", function () {
                process.emit("SIGINT" as any);
            });
        }
        process.on('SIGINT', async () => {
            console.log("SIGINT received, cleaning up...")
            await freeAtHome.markAllDevicesAsUnresponsive();
            console.log("clean up finished, exiting procces")
            process.exit();
        });
        process.on('SIGTERM', async () => {
            console.log("SIGTERM received, cleaning up...")
            await freeAtHome.markAllDevicesAsUnresponsive();
            console.log("clean up finished, exiting procces")
            process.exit();
        });
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