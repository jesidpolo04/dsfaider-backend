import express, { json } from 'express'
import 'dotenv/config'
import './config'

const PORT = process.env.PORT ?? 5000
const HOST = process.env.HOST ?? '127.0.0.1'
const PROTOCOL = process.env.PROTOCOL ?? 'http'

const app = express()
.use(json())
.get('/', (_, res)=>{
    res.send("😎 DSFAIDER backend ready for use!")
})

app.listen(PORT, ()=> {
    console.log(`Server running at port: ${PROTOCOL}://${HOST}:${PORT}`)
})

