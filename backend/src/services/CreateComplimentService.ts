import { getCustomRepository } from "typeorm";
import { ComplimentRepositories} from "../repositories/ComplimentisRespositories";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimenteRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreatComplimentService {
  async execute ({tag_id, user_receiver, user_sender, message}: IComplimenteRequest){
    const complimentRepositories = getCustomRepository(ComplimentRepositories);
    const usersRepositories = getCustomRepository(UserRepositories);

    if(user_sender === user_receiver){
      throw new Error("incorrect User Receiver")
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if(!userReceiverExists){
      throw new Error("User Receiver does not exists!");
    }

    const compliment = complimentRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentRepositories.save(compliment);

    return compliment;

  }
}

export {CreatComplimentService}