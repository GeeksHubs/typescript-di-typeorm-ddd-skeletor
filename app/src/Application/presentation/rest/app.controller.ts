import "reflect-metadata";
import { BaseHttpController, controller, httpGet } from 'inversify-express-utils';


@controller('/hello')
export class HelloController extends BaseHttpController {
  constructor(){
    super();
  }

  @httpGet('/')
  public helloWorld(){
    const statusCode= 200;
    const result = {"message":"helloworld"};
    return this.json(result,statusCode);
      
  }
}
