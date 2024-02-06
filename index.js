const express = require('express')
const app = express()

let bool = false

app.get('/verify', (req, res)=>{
	res.json(bool)
	bool = false
})

app.get('/change', (req, res)=>{
	bool = true
	res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, () => {
	console.log('Server started')
})
