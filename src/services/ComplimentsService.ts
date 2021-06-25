import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from '../repositories/UserRespositories';

interface IComplimentsRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class ComplimentsService {

    private complimentsRepository: ComplimentsRepositories;
    private userRepository: UserRepositories;

    constructor() {
        this.complimentsRepository = getCustomRepository(ComplimentsRepositories)

        this.userRepository = getCustomRepository(UserRepositories)
    }
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentsRequest) {

        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver")
        }

        const userExists = this.userRepository.findOne(user_receiver)

        if (!userExists) {
            throw new Error("User receiver does not exists!")
        }

        const compliment = this.complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

    }
}

export { ComplimentsService }