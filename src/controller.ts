import {WeatherDataForm} from "./weatherDataForm";
import {WeatherData} from "./weatherData";
import { Request, Response } from 'express';
import {WeatherStationManager} from "./weatherStationManager";
import {WeatherFreeAtHomeBridge} from "./weatherFreeAtHomeBridge";

export const getDataAndPrintRequestBody = (req: Request, res: Response) => {
    const value = req.params.value;
    const contentType = req.header('Content-Type');
    const body = new WeatherDataForm(req.body);

    const data = new WeatherData(body);

    console.log('Got Request, Body looks Like :');
    console.log(data);
    console.log('---------------');
    res.status(202).send();
    const weatherStationChannels = WeatherStationManager.getInstance(body.stationtype).get();
    WeatherFreeAtHomeBridge.update(data,weatherStationChannels);
};


