export interface UserDto{
    _id: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
    update_at?: Date;
  }