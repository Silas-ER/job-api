import express from 'express';
import e = require('express');
import candidatesController = require('./controllers/candidates-controller');

const router = express.Router();

// Health check route
router.get('/', (req, res) => {res.json({ message: 'Hello, World!' });});

// Candidate routes
router.get('/candidates', candidatesController.candidatesController.index);
router.post('/candidates', candidatesController.candidatesController.save);
router.get('/candidates/:id', candidatesController.candidatesController.show);
router.put('/candidates/:id', candidatesController.candidatesController.update);
router.delete('/candidates/:id', candidatesController.candidatesController.delete);

export { router };