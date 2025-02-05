const express = require('express')
const router = express.Router();

// importiamo DATA/POSTS
const data = require("../data/data_posts")

// index visualizza tutti gli elementi
router.get('/', function(req, res) {

    // BONUS
    // restituisce l'array di oggetti in formato json
    res.json(data)
    });

// show visualizza un elemento per id
router.get('/:id', function(req, res) {

    // BONUS
    // restituisce in formato json l'elemento singolo
    res.json(data[req.params.id]);
    });

// store crea un elemento
router.post('/', function(req, res) {
    res.send('Creazione nuovo post ');
    });

// update modifica l'elemento  
// .put = tutto l'elemento .patch = una parte dell'elemento
router.put('/:id', function(req, res) {
    res.send('Lista dei post ' + req.params.id);
});

// delate cancella un elemento
router.delete('/:id', function(req, res) {
    res.send('Cancella post post' + req.params.id);
});



module.exports = router;