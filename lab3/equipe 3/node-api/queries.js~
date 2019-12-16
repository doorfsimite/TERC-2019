const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'terc',
    password: 'sql',
    port: 5432,
})


const getAll = (request, response) => {
    pool.query('SELECT * FROM registros', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getIntervalo = (request, response) => {
    const {limite_inferior, limite_superior} = request.body

    pool.query('SELECT * FROM registros WHERE tempo > $1 AND tempo < $2', [limite_inferior,limite_superior], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAll,
    getIntervalo
}