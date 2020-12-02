import { IJwtAuthentication } from "./jwt.interface";
import { sign, Secret , Algorithm, SigningOptions } from 'jsonwebtoken';
import { injectable } from "inversify";
import { createLogger  } from '../../../infrastructure/logger';
import { UserDto } from "../../../domain/dtos";


export interface JwtPayload{
    sub: string
}

@injectable()
export class JwtService implements IJwtAuthentication{
    private logger = createLogger('JwtService');
    async encodeJWT(user: UserDto): Promise<string>{
    
        try{
            const payload:JwtPayload = {sub : user._id};
            const secret: Secret = process.env.JWT_KEY ||'geekshubs';
            const options: SigningOptions = {
            algorithm :process.env.JWT_ALGORITHM as Algorithm ?? 'HS512',
            expiresIn: parseInt(process.env.JWT_EXPIRING_TIME_IN_SECONDS ?? '3600',10)}
            return await sign(payload,secret,options)
        }catch (Exception){
            this.logger.error(Exception.message);
        }
    }
  
}