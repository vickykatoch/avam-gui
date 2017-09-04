import { InterAppMessage } from '../../src/app/logger-core/index';
import { JLogSender } from "./log-sender";

class LogWorkerController {
    private clients : { [key: string]: MessagePort };

    onConnect(message: MessageEvent) : void {
        // const clientApp = message.srcElement.name;
        const port = message.ports[0]; 
        // if(this.clients[clientApp]) {
        //     this.clients[clientApp].close();
        // }
        // this.clients[clientApp] = port;
        port.addEventListener('message',(msg: MessageEvent)=> {
            JLogSender.send(msg.data);
        });
        port.start();
        this.sendConnectStatus(port);
    }

    private sendConnectStatus(port: MessagePort) : void {
        port.postMessage(<InterAppMessage>{
            type : 'CONNECTED'
        });
    }

}


export const JLogWorkerController = new LogWorkerController();