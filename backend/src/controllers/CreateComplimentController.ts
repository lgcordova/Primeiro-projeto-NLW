import { Request, Response } from "express"
import { CreatComplimentService } from "../services/CreateComplimentService"

class CreatComplimentController{
  async handle(request: Request, response: Response) {
    const {tag_id, user_receiver, message} = request.body;
    const {user_id} = request

    const CreateComplimentService = new CreatComplimentService();

    const compliment = await CreateComplimentService.execute({
      tag_id,
      user_receiver,
      user_sender: user_id,
      message,});

    return response.json(compliment);
  }
}

export {CreatComplimentController};