import 'reflect-metadata'
import express from 'express'
import './database'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, () => console.log('server is running  in port http://localhost:3000'))

