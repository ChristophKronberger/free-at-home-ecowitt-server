import express from "express";
import {Server} from "http";
import bodyParser from "body-parser";
import routes from "./routes";

export class httpServer {
    private static instance: Server | undefined = undefined;


    private static startServer(port: number) {
        const app = express();
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        app.use(routes);

        app.listen(port, () => {
            console.log(`Server is running on port `, port)
        });
    }

    private static stopServer() {
        httpServer.instance?.close(err => console.error(err));
    }


    public static startServerOnPort(port: number) {
        if (httpServer.instance === undefined) {
            httpServer.startServer(port);
        } else {
            const address = httpServer.instance.address();
            let currentPort: number = 0;
            if(typeof address === 'string'){ // For the rare case where server.address returns a String (UNIX Socket path), should not happening.
                currentPort = Number(address);
            } else if(address){
                currentPort = address.port
            }
            if(currentPort === port)return;
            httpServer.stopServer()
            httpServer.startServer(port);
        }
    }
}
