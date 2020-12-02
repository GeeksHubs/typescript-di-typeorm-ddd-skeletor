import { User } from "../../../domain/models/user.model";
import { ILoginService } from "./login.interface";
import {  inject, injectable } from "inversify";
import { createLogger} from '../../../infrastructure/logger';
import  Types  from '../../../infrastructure/server/types'
import { IUserRepository } from "../../../domain/repositories";
import { compare} from 'bcrypt';
import { JwtService } from "../../../infrastructure/authentication/jwt/jwt.service";



@injectable()
export class LoginService implements ILoginService{
    
  private logger = createLogger('RegisterService');
  @inject (Types.IJwtService) private jwtService : JwtService;
  
  constructor( @inject( Types.IUserRepository) private userRepo:IUserRepository){}
    
   async loginUser(user: User): Promise<String | null> {
        this.logger.info("Init Login User ->"+user.getEmail);
        const User = await this.userRepo.findUser(user.getEmail);
         if (User === null) throw new Error("Error in Login");
         let result = await this.checkPassword(user.getPassword, User[0].password);
         if (!result) throw new Error("Error in Login");
         return this.jwtService.encodeJWT(User);
    }

    async checkPassword(plainPassword:string, hashedPassword:string):Promise<boolean> {
      try{
        return await compare(plainPassword, hashedPassword);
      }catch(error){
             this.logger.error(error);
      }
    }

         
}