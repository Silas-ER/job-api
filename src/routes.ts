import express from 'express';
import e = require('express');
import candidatesController = require('./controllers/candidates-controller');
import companiesController = require('./controllers/companies-controller');
import jobsController = require('./controllers/jobs-controller');

const router = express.Router();

// Health check route
router.get('/', (req, res) => {res.json({ message: 'Hello, World!' });});

// Candidate routes
router.get('/candidates', candidatesController.candidatesController.index);
router.post('/candidates', candidatesController.candidatesController.save);
router.get('/candidates/:id', candidatesController.candidatesController.show);
router.put('/candidates/:id', candidatesController.candidatesController.update);
router.delete('/candidates/:id', candidatesController.candidatesController.delete);

// Company routes
router.get('/companies', companiesController.companiesController.index);
router.post('/companies', companiesController.companiesController.save);
router.get('/companies/:id', companiesController.companiesController.show);
router.put('/companies/:id', companiesController.companiesController.update);
router.delete('/companies/:id', companiesController.companiesController.delete);

// Job routes
router.get('/jobs', jobsController.jobsController.index);
router.post('/jobs', jobsController.jobsController.save);
router.get('/jobs/:id', jobsController.jobsController.show);
router.put('/jobs/:id', jobsController.jobsController.update);
router.delete('/jobs/:id', jobsController.jobsController.delete);

export { router };