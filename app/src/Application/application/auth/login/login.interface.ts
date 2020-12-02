import { User } from '../../../domain/models/user.model'

export interface ILoginService{
    loginUser(user:User):Promise<String|null>;
}