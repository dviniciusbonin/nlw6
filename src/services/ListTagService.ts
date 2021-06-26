import { getCustomRepository } from 'typeorm';
import { TagsRespositories } from "../repositories/TagsRespositories"
import { classToPlain } from 'class-transformer'

class ListTagService {
    private tagRepository: TagsRespositories

    constructor() {
        this.tagRepository = getCustomRepository(TagsRespositories)
    }

    async execute() {
        const tags = await this.tagRepository.find();


        return classToPlain(tags);

    }

}

export { ListTagService }