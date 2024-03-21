const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Route pour récupérer les données de la collection MongoDB
router.get('/employees', async (req, res) => {
    try {
        // Récupérer toutes les données de la collection
        const employees = await Employee.find();
        res.status(200).json(employees); 
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
