import { injectable } from "inversify";
import { Connection, getConnection, Repository } from "typeorm";
import {createLogger} from '../../../logger';

@injectable()
export class ConnectionService{

      private logger = createLogger('TypeORM');
      
      private _conn:Connection;
      
      async getRepo<T>(target:string | (new () =>{})):Promise<Repository<T>> {
        try{
          const connection =  await  this._getConn();
          return await connection.getRepository<T>(target);
        }catch(error){
          this.logger.error("Error en la recuperación del respositorio "+ error.message)
        }
          }
    
      private async _getConn(){
         if(!this._conn){
            this.logger.info("Devolviendo conexión ya creada");
            return getConnection();
          }
          this.logger.error("No connection");

      
      }
      
      async closeConnection(){
        this._conn.close();
      }
}