const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

mongoose.connect('mongodb+srv://Ibrahima:Dieng123%40@ibrahima.ua0efvn.mongodb.net/Gestion_des_employees');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '1800');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, Origin, X-Requested-With, Content, Accept, Accept-Version');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



// Middleware pour gérer les requêtes JSON
app.use(bodyParser.json());

// Middleware pour activer les requêtes CORS
app.use(cors());

// Route pour afficher un message dans le navigateur
app.get('/', (req, res) => {
    res.send('Le serveur est prêt à répondre aux requêtes.');
});

// Routes
app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

