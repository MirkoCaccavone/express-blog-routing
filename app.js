// Importa il modulo Express
const express = require('express')
const app = express()
const port = 3000

// importo il router
const postsRouter = require('./routers/posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog")
});

app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})