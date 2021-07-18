import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from "../repositories/UserRespositories"


class ListUserService {

    private userRepsitory: UserRepositories

    constructor() {
        this.userRepsitory = getCustomRepository(UserRepositories)
    }
    async execute() {
        const users = await this.userRepsitory.find();

        return classToPlain(users);
    }

    async getById(id: string) {
        const user = await this.userRepsitory.findOne(id);

        return classToPlain(user);
    }

}

export { ListUserService }