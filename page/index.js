import Worker from '../worker/index?worker'

const worker = new Worker();
worker.onmessage = (evt) => console.log(evt.data);
worker.onerror = (evt) => console.error(evt);
