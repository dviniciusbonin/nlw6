import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/User'


class ComplimentsRepositories extends Repository<User> { }

export { ComplimentsRepositories }