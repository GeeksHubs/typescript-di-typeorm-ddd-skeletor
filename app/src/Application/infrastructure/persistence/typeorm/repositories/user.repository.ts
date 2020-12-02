import { injectable } from "inversify";
import { UserDto } from '../../../../domain/dtos';
import { IUserRepository } from '../../../../domain/repositories';
import { UserEntity } from '../entities';
import { ConnectionService } from '../config/connectionService';
import { createLogger } from '../../../logger'



@injectable()
export class UserRepository implements IUserRepository{

  private  conn;
  private logger = createLogger('UserRepository');

  constructor(){
    this.conn =  new ConnectionService();
  }
  
  async findUser(email: String): Promise<UserDto | null> {
    try{
      let repo = await this.conn.getRepo(UserEntity);
      let result = await repo.find({ where: { email:email}})
      if (result.length > 0 ) return result;
      return null;
    }catch(Exception){
      this.logger.error(Exception.message);
    }
  }

  async findAll(): Promise<UserDto| null> {
    try{
      let repo =await this.conn.getRepo(UserEntity);
      return repo.find();
    }catch(error){
      this.logger.error(error.message);
    }
  }


  async create(user: UserDto): Promise<UserDto> {
    try{
      let repo = await this.conn.getRepo(UserEntity)
      return repo.save(user);
  }
    catch(error){
     console.log("Error "+ error.message);
    }
  }
}