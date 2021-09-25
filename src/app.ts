import express, { Application, Request, Response } from 'express'

const app: Application = express()

const PORT: number = Number(process.env.PORT) || 5000

app.get('/health', (req: Request, res: Response) => {
    res.send('Healthy?')
})

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`)
})
