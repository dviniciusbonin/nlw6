import 'reflect-metadata'
import express, { Request, Response, NextFunction, response } from 'express'
import 'express-async-errors'
import './database'
import cors from 'cors';
import { router } from './routes'

const app = express()

app.use(cors())

app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(err);
    if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server Error"
    })

})

app.listen(3000, () => console.log('server is running  in port http://localhost:3000'))

