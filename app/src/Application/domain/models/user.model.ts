import * as bcrypt from 'bcrypt';

export class User{

  private name: string;
  private email:string;
  private password?: string;

  constructor( name: string,
    email: string,
    password?: string,
    private createdAt?: Date,
    private updatedAt?: Date,
    private id?: string,){
      this.name = name;
      this.email = email;
      this.password = password;
  }

  get getName(): string {
    return this.name;
  }

  get getEmail(): string {
    return this.email;
  }

  get getCreatedAtDate(): Date {
    return this.createdAt;
  }

  get getUpdatedAtDate(): Date {
    return this.updatedAt;
  }

  get getPassword(): string {
    return this.password;
  }

  get getId(): string {
    return this.id;
  }

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

};