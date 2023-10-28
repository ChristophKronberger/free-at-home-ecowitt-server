import { FreeAtHome } from '@busch-jaeger/free-at-home';

const freeAtHome = new FreeAtHome();
freeAtHome.activateSignalHandling();

async function main() {

}

main();
// Get notified about changes in the configuration of the add on

//#################################################################################
import {AddOn} from '@busch-jaeger/free-at-home';
import {ConfigurationEntry} from "@busch-jaeger/free-at-home/lib/scriptingApi";
import {httpServer} from "./httpServer";


const metaData = AddOn.readMetaData();

const addOn = new AddOn.AddOn(metaData.id);

addOn.on("configurationChanged", (configuration: AddOn.Configuration) => {
  console.log("CONFIG CHANGED")
  console.debug(configuration);
  // @ts-ignore
  var port = configuration["default"]?.items?.["port"] ??  5180;
  httpServer.startServerOnPort(port)
});

addOn.connectToConfiguration();
