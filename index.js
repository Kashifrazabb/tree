import express from 'express'
import { data } from './data.js'

const PORT = process.env.PORT || 5000

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (_, res) => {
    res.render('index', { data })
})

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))