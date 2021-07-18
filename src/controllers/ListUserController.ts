import { Request, Response } from 'express'
import { ListUserService } from "../services/ListUserService"


class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService()

        const users = await listUserService.execute();

        return response.json(users);
    }

    async getUser(request: Request, response: Response) {
        const { user_id } = request

        const listUserService = new ListUserService();

        const user = await listUserService.getById(user_id);

        return response.json(user);
    }
}

export { ListUserController }