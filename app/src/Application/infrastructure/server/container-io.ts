import { Container } from 'inversify';
import { IRegisterService } from '../../application/auth/register/register.interface';
import { RegisterService } from '../../application/auth/register/register.service';
import { ILoginService } from '../../application/auth/login/login.interface';
import { LoginService } from '../../application/auth/login/login.service';
import { IUserRepository } from '../../domain/repositories';
import { IJwtAuthentication} from '../authentication/jwt/jwt.interface';


import '../../presentation/rest';
import { UserRepository } from '../persistence/typeorm/repositories';
import Types from './types';
import { JwtService } from '../authentication/jwt/jwt.service';

let container = new Container();

//Repositories
container.bind<IUserRepository>(Types.IUserRepository).to(UserRepository);

//Services
container.bind<IRegisterService>(Types.IRegisterService).to(RegisterService);
container.bind<ILoginService>(Types.ILoginService).to(LoginService);
container.bind<IJwtAuthentication>(Types.IJwtService).to(JwtService);

export default container;
