import { hash } from 'bcryptjs';
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRespositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    private usersRepository: UserRepositories

    constructor() {
        this.usersRepository = getCustomRepository(UserRepositories);
    }

    async execute({ name, email, admin, password }: IUserRequest) {

        if (!email) {
            throw new Error("email incorrect")
        }

        const userAlreadyExists = await this.usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = this.usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })

        await this.usersRepository.save(user);

        delete user.password

        return user;
    }

}

export { CreateUserService }