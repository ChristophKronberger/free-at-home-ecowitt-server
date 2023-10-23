
import {FreeAtHome, WeatherStationChannels} from "@busch-jaeger/free-at-home";
import {create} from "domain";
const freeAtHome = new FreeAtHome();
freeAtHome.activateSignalHandling();

async function createWeatherStationChannel(stationName: string) {
    freeAtHome.activateSignalHandling()
    return await freeAtHome.createWeatherStationDevice("WS1", stationName)
}
export class WeatherStationManager {
    private static instance: WeatherStationManager | null;
    private static first = true;

    private station: WeatherStationChannels
    static async create(stationName: string) {
        console.log("Create object")
        try {
            const t = await createWeatherStationChannel(stationName)
            return new WeatherStationManager(t)
        } catch (err) {
            this.instance = null
            throw Error("geht nix")
        }
    }
    private constructor(station: WeatherStationChannels) {
        this.station = station;
        this.setListener();
    }

    public setListener(){
        if(!WeatherStationManager.first) return;
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
        WeatherStationManager.first = false;
    }
    public static async getInstance(name: string) {
        WeatherStationManager.instance = await WeatherStationManager.create(name);
        return WeatherStationManager.instance;
    }

    public get(): WeatherStationChannels {
        return this.station
    }
}