import { Column, Entity, PrimaryColumn} from "typeorm";
import { UserDto } from '../../../../domain/dtos';

@Entity({ name: "users" })
export class UserEntity implements UserDto{

  @PrimaryColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created_at?: Date;

  @Column()
  update_at?: Date;

}
