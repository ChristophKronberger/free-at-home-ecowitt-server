import { FreeAtHome } from '@busch-jaeger/free-at-home';
import express, {Express} from 'express'
import routes from "./routes";

import bodyParser from "body-parser";
// const freeAtHome = new FreeAtHome();
// freeAtHome.activateSignalHandling();
const app  = express();

const PORT = process.env.PORT ||8080
async function main() {

// Use body-parser middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

// Use your routes
  app.use(routes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });


  // const weatherStationChannels = await freeAtHome.createWeatherStationDevice("ES", "WeatherStation");

}

main();
// Get notified about changes in the configuration of the add on

//#################################################################################
import {AddOn} from '@busch-jaeger/free-at-home';
import {ConfigurationEntry} from "@busch-jaeger/free-at-home/lib/scriptingApi";


const metaData = AddOn.readMetaData();

const addOn = new AddOn.AddOn(metaData.id);

addOn.on("configurationChanged", (configuration: AddOn.Configuration) => {

});

addOn.connectToConfiguration();
