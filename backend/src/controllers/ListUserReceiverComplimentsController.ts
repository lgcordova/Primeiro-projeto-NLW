import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListsUserReceiverComplimentsService";


class ListUserReceiverComplimentsController {
   async handle(request: Request, response: Response){
    const {user_id} = request;
    const listUserReceiverComplimentsService = new ListUserReceiveComplimentsService();
    const compliment = await listUserReceiverComplimentsService.execute(user_id);

    return response.json(compliment);
   }
}

export {ListUserReceiverComplimentsController};