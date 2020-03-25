const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

// // Tipos de params
// GET: 
	// query params(filtros, pages)
	// route params
	// body: 
// POSt: