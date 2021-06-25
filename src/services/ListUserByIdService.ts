import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class ListUserByIdService{
    async execute(id: string){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne(id);

        return user;
    }
}

export {ListUserByIdService}