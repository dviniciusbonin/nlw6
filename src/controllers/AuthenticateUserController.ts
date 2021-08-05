import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const authenticateUserService = new AuthenticateUserService();

        const auth = await authenticateUserService.execute({
            email,
            password
        })

        return response.json({ accessToken: auth })
    }
}

export { AuthenticateUserController }

//aula 04 pausa em 44:57