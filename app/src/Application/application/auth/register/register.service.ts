import { inject, injectable } from "inversify";
import { createLogger  } from '../../../infrastructure/logger';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from "../../../domain/dtos";
import { User } from "../../../domain/models/user.model";
import { IUserRepository } from "../../../domain/repositories";
import Types from "../../../infrastructure/server/types";
import { IRegisterService } from "./register.interface";


@injectable()
export class RegisterService implements IRegisterService{
  private logger = createLogger('RegisterService');
  
  constructor( @inject( Types.IUserRepository) private userRepo:IUserRepository){}
  
  async registerUser(user: User): Promise<User> {
    this.logger.info("Init register User");
    const userFind = await this.userRepo.findUser(user.getEmail);
    if ( userFind !== null ) throw new Error("Email exist!!");
    user.hashPassword();
    const userDto = this.toUserDTO(user);
    const createUserDTO = await this.userRepo.create(userDto);
    return this.toUser(createUserDTO);
   }

  
  private toUser(userDTO: UserDto): User {
    return new User(
      userDTO.name,
      userDTO.email,
      null,
      userDTO.created_at,
      userDTO.update_at,
      userDTO._id
    )
  }
    
  private toUserDTO(user:User):UserDto{
    let uuid = uuidv4();
    return {
        _id: uuid,
        email: user.getEmail,
        name: user.getName,
        password: user.getPassword,
        created_at: new Date(),
        update_at: new Date()
    }
  }

}