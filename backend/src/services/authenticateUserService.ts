import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    const user = await usersRepository.findOne({
       email
     });

      if(!user){
      throw new Error("email/Password incorrect")
     }

     const passwordMatch = await compare(password, user.password);

     if(!passwordMatch){
      throw new Error("email/Password incorrect")
     }

     const token = sign({
      email: user.email
     }, "1srg1hryktf84jdh6se1f3dt1t8k6ds1ef", {
      subject : user.id,
      expiresIn: "1d"
     })
     return token;
 }
}
export {AuthenticateUserService}