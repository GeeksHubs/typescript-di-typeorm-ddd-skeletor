import "reflect-metadata";
import * as Express from 'express';
import * as session from 'express-session';
import { InversifyExpressServer } from 'inversify-express-utils';
import {createLogger} from '../logger';
import * as cors from 'cors';


const logger = createLogger('server');


// IoC
import container from './container-io';



// start the server
const server = new InversifyExpressServer(container);

const port: number = parseInt(process.env.SERVER_PORT ?? '3000', 10);

server.setConfig((App: any) => {
    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');
    const compress = require('compression');
    const methodOverride = require('method-override');
    App
        .use(cors({origin:true}))
        .options('*',cors())
        .use(cookieParser())
        .use(compress({}))
        .use(methodOverride())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
            extended: true
        }))
        .use(session({
            secret: 'AUTH_SECRET',
            name: 'pp-cookie',
            resave: true,
            saveUninitialized: false
        }))
        .use('/apidoc', Express.static('apidoc'));
});


const app = server.build();

const initApp= ()  =>{
    app.listen(3000);
    logger.info(`Server runngin in http://localhost:${port}`);
}

export { app, initApp};
