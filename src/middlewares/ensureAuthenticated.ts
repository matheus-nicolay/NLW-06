import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import {AuthenticateUserService} from "../services/AuthenticateUserService";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    const [,token] = authToken.split(" ");

    if(!token){
        return response.status(401).end();
    }


    try{
        const { sub } = verify(token, "jnefiwfwuefnwefnwefnweoifwnefoiwnefoie") as IPayload;

        request.user_id  = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }

}