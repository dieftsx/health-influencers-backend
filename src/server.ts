import express from 'express'
import bodyparser from 'bodyparser'
import influencersRoutes from './routes/Influencers'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyparser.json())

app.use('api/influencers', influencersRoutes)


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
