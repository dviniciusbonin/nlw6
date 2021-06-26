import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { config } from 'dotenv'
config()

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, process.env.AUTH_SECRET) as IPayload;

        request.user_id = sub;

        return next();
    } catch (error) {
        console.log(error)
        return response.status(401).end();
    }

}