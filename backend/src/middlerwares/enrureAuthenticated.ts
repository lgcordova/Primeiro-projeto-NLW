import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPaylouad {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  const authToken = request.headers.authorization;
  
  if(!authToken){
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try{ 
  const {sub} = verify(token, "1srg1hryktf84jdh6se1f3dt1t8k6ds1ef") as IPaylouad;

  request.user_id = sub

   return next();

  }catch(err) {
    return response.status(401).end();
  }
}