import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentisRespositories"

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentRepositories = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentRepositories.find({
     where: {
         user_recerver: user_id
      },
      relations: ["userSender", "userReceiver", "tag" ],
    });
     return compliments;
  }
}

export {ListUserReceiveComplimentsService}