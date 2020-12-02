import { User } from '../../../domain/models/user.model'

export interface IRegisterService{
    registerUser(user:User):Promise<User>;
}