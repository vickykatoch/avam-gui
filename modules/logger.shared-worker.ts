import { JLogWorkerController } from './log-writer/index';


addEventListener('connect',(evt: MessageEvent)=> {
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