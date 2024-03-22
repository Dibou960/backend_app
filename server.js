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

app.use(cors({
    origin: 'http://localhost:3000', // Remplacez ceci par l'URL de votre front-end
    credentials: true, // Activez si vous utilisez des cookies avec des requêtes CORS
}));


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

