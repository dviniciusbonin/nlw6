import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListUserSenderComplimentsService {
    private complimentRepository: ComplimentsRepositories;

    constructor() {
        this.complimentRepository = getCustomRepository(ComplimentsRepositories)
    }
    async execute(user_id: string) {

        const compliments = await this.complimentRepository.find({
            where: {
                user_sender: user_id
            }
        })
        return compliments;

    }

}

export { ListUserSenderComplimentsService }