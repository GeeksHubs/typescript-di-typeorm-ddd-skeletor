import { UserDto } from "../../../domain/dtos";

export interface IJwtAuthentication{
     encodeJWT(user:UserDto):Promise<string>;
}  