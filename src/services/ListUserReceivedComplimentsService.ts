import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListUserReceivedComplimentsService {
    private complimentRepository: ComplimentsRepositories;

    constructor() {
        this.complimentRepository = getCustomRepository(ComplimentsRepositories)
    }
    async execute(user_id: string) {
        const compliments = await this.complimentRepository.find({
            where: {
                user_receiver: user_id
            },

            relations: [
                "userSender", "userReceiver", "tag"
            ]
        })

        return compliments;

    }

}

export { ListUserReceivedComplimentsService }