import { createConnection } from "typeorm";
import {createLogger} from './../../logger';

export const initOrm = async()=>{
    const logger = createLogger('TypeORM');
    
    await createConnection()
    .then((connection)=>logger.info("Init Connection"))
    .catch(error=>logger.error(error.message));
   
}