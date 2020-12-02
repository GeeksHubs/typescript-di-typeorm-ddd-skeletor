import "jest";
import { HelloController } from '../app.controller';

describe("GET /hello", () => {

 let helloController : HelloController;

 beforeAll(async()=>{
   helloController = new HelloController();
 });


  it("Hello API Request", async () => {


       const response = await helloController.helloWorld();
       expect(response.statusCode).toEqual(200);
    
    
  });
});
