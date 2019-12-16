//Comando pra pegar "node index.js"

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3003

app.use(cors())

const db = require('./queries')
const paiton = require('./paiton')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/completo', db.getAll)
app.post('/limitado', db.getIntervalo)
app.get('/on',paiton.led_on)
app.get('/off', paiton.led_off)

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


//POST Limitado curl
//curl --data "limite_inferior=00:00:00&limite_superior=23:59:59" localhost:3003/limitado