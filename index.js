import express from 'express'
import { data } from './test.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (_, res) => {
    res.render('index', { data })
})


app.listen(3000, () => console.log('Server is listening to port 3000'))