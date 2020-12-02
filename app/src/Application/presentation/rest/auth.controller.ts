import "reflect-metadata";
import { BaseHttpController, controller, httpGet, httpPost, request, response } from 'inversify-express-utils';
import { Request, Response } from "express";
import { User } from "../../domain/models/user.model";
import { inject } from "inversify";
import Types from "../../infrastructure/server/types";
import { IRegisterService } from "../../application/auth/register/register.interface";
import { ILoginService } from "../../application/auth/login/login.interface";


@controller('/api')
export class AuthController extends BaseHttpController {
  constructor(
      @inject(Types.IRegisterService) private registerService: IRegisterService,
      @inject(Types.ILoginService) private loginService: ILoginService

  ){
    super();
  }

  @httpPost('/auth')
  public async createUser(@request() req: Request, @response() res:Response){

    try{
     let user= await this.registerService.registerUser(
        new User(
          req.body.name,
          req.body.email,
          req.body.password,
          new Date(),
          new Date()
        )
      );
      const statusCode= 200;
      const result = {"message":"User Created ->"+user.getId};
      return this.json(result,statusCode);
    }catch(error){
        const statusCode=400;
        const result={"error": error.message}
        return this.json(result, statusCode);
    }
  }

  @httpGet('/auth')
  public async getLogin(@request() req: Request, @response() res:Response){
    try{
     let login = await this.loginService.loginUser(
      new User(
        null,
        req.body.email,
        req.body.password,
        null,
        null
      ))
      const statusCode= 200;
      const result = {"message":login};
      return this.json(result,statusCode);
    }catch(error){
      const statusCode=400;
      const result={"error":error.message};
      return this.json(result, statusCode);
    }
  }

}