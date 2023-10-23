
import {FreeAtHome, WeatherStationChannels} from "@busch-jaeger/free-at-home";
import {create} from "domain";
const freeAtHome = new FreeAtHome();
freeAtHome.activateSignalHandling();

async function createWeatherStationChannel(stationName: string) {
    return await freeAtHome.createWeatherStationDevice("WS1", stationName)
}

async function createWeatherStationManager(stationName: string){
    return
}

export class WeatherStationManager {
    private static instance: WeatherStationManager | null;

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

    public static async getInstance(name: string) {
        if (!WeatherStationManager.instance) {
            WeatherStationManager.instance = await WeatherStationManager.create(name);
        }
        return WeatherStationManager.instance;
    }

    public get(): WeatherStationChannels {
        return this.station
    }
}