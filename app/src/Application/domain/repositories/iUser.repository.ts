import { UserDto } from '../dtos/user.dto';

export interface IUserRepository  {
  create(user:UserDto):Promise<UserDto>;
  findAll():Promise<UserDto>;
  findUser(email:String):Promise<UserDto>;
}