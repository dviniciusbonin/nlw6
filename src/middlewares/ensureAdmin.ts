import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express'
import { UserRepositories } from '../repositories/UserRespositories';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;

    const userRepositories = getCustomRepository(UserRepositories)

    const { admin } = await userRepositories.findOne(user_id)

    if (admin) {
        return next();
    }
    return response.status(401).json({ error: "unauthorized" })
}