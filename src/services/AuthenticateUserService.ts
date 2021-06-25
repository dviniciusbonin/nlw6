import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRespositories'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    private usersRepository: UserRepositories

    constructor() {
        this.usersRepository = getCustomRepository(UserRepositories);
    }


    async execute({ email, password }: IAuthenticateRequest) {
        const user = await this.usersRepository.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email,

        }, "nodejsmelhorquephp", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }

}

export { AuthenticateUserService }