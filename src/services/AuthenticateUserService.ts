import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Subject } from "typeorm/persistence/Subject";
import { response } from "express";
import { getCustomRepository } from "typeorm";


const jwtSecret = "jnefiwfwuefnwefnwefnweoifwnefoiwnefoie";

interface iAuthenticateRequest{
    email: string, 
    password: string
}

class AuthenticateUserService{
    async execute({email, password}: iAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }
        
        const passwordMath = await compare(password, user.password);

        if(!passwordMath){
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, jwtSecret, 
        {
         subject: user.id,
         expiresIn: '1d'
        });
        return token;
    }
}

export {AuthenticateUserService}

