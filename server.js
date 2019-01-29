const express = require('express')
const app = express()
const port = 3306

app.get('/', (req, res) => res.send('Finally listening!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))