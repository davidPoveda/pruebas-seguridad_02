const express = require('express');
const router = express.Router();

// No se valida entrada ni se protege contra ataques
router.post('/create', (req, res) => {
    const nombre = req.body.nombre;
    res.send('Usuario creado: ' + nombre);
});

module.exports = router;

const express = require('express');
const app = express();
const users = require('./routes/users');
app.use(express.json());
app.use('/users', users);
app.listen(3000, () => console.log('Servidor en puerto 3000'));