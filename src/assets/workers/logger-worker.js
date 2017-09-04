'use strict';

var LogSender = (function () {
    function LogSender() {
    }
    LogSender.prototype.send = function (message) {
        console.info(message);
        this.buildRequest(message);
    };
    LogSender.prototype.buildRequest = function (message) {
        fetch("http://localhost:3001/logwriter", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify(message)
        }).then(function (response) {
            console.info(response);
        });
    };
    return LogSender;
}());
var JLogSender = new LogSender();

var LogWorkerController = (function () {
    function LogWorkerController() {
    }
    LogWorkerController.prototype.onConnect = function (message) {
        // const clientApp = message.srcElement.name;
        var port = message.ports[0];
        // if(this.clients[clientApp]) {
        //     this.clients[clientApp].close();
        // }
        // this.clients[clientApp] = port;
        port.addEventListener('message', function (msg) {
            JLogSender.send(msg.data);
        });
        port.start();
        this.sendConnectStatus(port);
    };
    LogWorkerController.prototype.sendConnectStatus = function (port) {
        port.postMessage({
            type: 'CONNECTED'
        });
    };
    return LogWorkerController;
}());
var JLogWorkerController = new LogWorkerController();

addEventListener('connect', function (evt) {
    JLogWorkerController.onConnect(evt);
});
// import { Processor } from './processor';
// const ports = [];
// addEventListener('connect',(evt: MessageEvent)=> {
//     const port = evt.ports[0];
//     port.start();
//     ports.push(port);
//     port.postMessage({ type : 'CONNECTED'});
//     port.addEventListener('message', (evt: MessageEvent)=>{
//         console.log(evt.data);
//     });
// });
// addEventListener('message',(evt: MessageEvent) => {
//     const p = new Processor();
//     p.show('Hello There');
//     console.log('Web Worker Message : ', evt.data);
// })
