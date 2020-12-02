import { initOrm } from './Application/infrastructure/persistence/typeorm';
import { initApp } from './Application/infrastructure/server';


const startApp = async ()=>{
   
    initOrm();
    initApp();
};

startApp();