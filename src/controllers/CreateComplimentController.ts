import { Request, Response } from 'express';
import { ComplimentsService } from '../services/ComplimentsService'

class CreateComplimentController {

    async handle(request: Request, response: Response) {
        const { tag_id, user_receiver, message } = request.body
        const { user_id } = request

        const complimentService = new ComplimentsService()

        const compliment = await complimentService.execute({
            tag_id,
            user_sender: user_id,
            user_receiver,

            message
        })

        return response.json(compliment);
    }

}

export { CreateComplimentController }