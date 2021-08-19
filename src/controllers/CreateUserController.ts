import { Request, Response } from "express"
import { UserRepositories } from '../repositories/UserRespositories'
import { getCustomRepository } from "typeorm";
import { CreateUserService } from '../services/CreateUserService'
class CreateUserController {

    private usersRepository: UserRepositories

    async handle(request: Request, response: Response) {
        console.log(request.body);

        const { name, email, admin, password } = request.body

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin, password });

        return response.json(user);

    }

}

export {
    CreateUserController
}