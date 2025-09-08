const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = 3000;
const session = require('express-session');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(session({
    secret: 'clave-secreta', 
    resave: false,
    saveUninitialized: false
}));


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public')); 


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


app.get('/', (req, res) => {
    res.render('index', { user: req.session.user });
});

app.get('/catalog', (req, res) => {
    res.render('catalog', { user: req.session.user});
});

app.get('/blog', (req, res) => {
    res.render('blog', { user: req.session.user });
});

app.get('/about', (req, res) => {
    res.render('nosotros', { user: req.session.user });
});


app.post('/register', async (req, res) => {
    const { nombre, apellido, correo, password } = req.body;

    if (!nombre || !apellido || !correo || !password) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const [existing] = await pool.query('SELECT * FROM users WHERE correo = ?', [correo]);
        if (existing.length > 0) return res.status(400).send('El correo ya está registrado.');


        await pool.query(
            'INSERT INTO users (nombre, apellido, correo, password) VALUES (?, ?, ?, ?)',
            [nombre, apellido, correo, hashedPassword]
        );

        res.send('Registro exitoso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
});


app.post('/login', async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE correo = ?', [correo]);
        if (rows.length === 0) return res.status(400).json({ success: false, message: 'Usuario no encontrado.' });

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ success: false, message: 'Contraseña incorrecta.' });

        req.session.user = {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo
        };

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) console.error(err);
        res.redirect('/');
    });
});



app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

