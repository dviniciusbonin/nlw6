import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRespositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    private usersRepository: UserRepositories

    constructor() {
        this.usersRepository = getCustomRepository(UserRepositories);
    }

    async execute({ name, email, admin }: IUserRequest) {
        const userAlreadyExists = await this.usersRepository.findOne({
            email
        });

        if (userAlreadyExists)
            throw new Error("User already exists");

        const user = this.usersRepository.create({
            name,
            email,
            admin
        })

        await this.usersRepository.save(user);

        return user;
    }

}

export { CreateUserService }