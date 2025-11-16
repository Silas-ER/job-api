import type e = require('express');
import { Candidate } from '../models/candidate';
import QueryTypes = require('sequelize/lib/query-types');
import UPDATE = require('sequelize/lib/query-types');

export const candidatesController = {
    index: async (req: e.Request, res: e.Response) => {
        try {
            const candidates = await Candidate.findAll();
            return res.json(candidates);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
        
    },

    save: async (req: e.Request, res: e.Response) => {
        const { name, bio, email, phone, openToWork } = req.body;
        try {
            const candidate = await Candidate.create({ name, bio, email, phone, openToWork });
            return res.status(201).json(candidate);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    show: async (req: e.Request, res: e.Response) => { 
        const { id } = req.params;

        try {
            const candidate = await Candidate.findByPk(id);

            if (!candidate) {
                return res.status(404).json({ message: 'Candidate not found' });
            }

            return res.json(candidate);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    update: async (req: e.Request, res: e.Response) => {
        const { id } = req.params;
        const { name, bio, email, phone, openToWork } = req.body;
        
        try {
            const candidate = await Candidate.findByPk(id);

            if (!candidate) {
                return res.status(404).json({ message: 'Candidate not found' });
            } 

            candidate.name = name;
            candidate.bio = bio;
            candidate.email = email;
            candidate.phone = phone;
            candidate.openToWork = openToWork;

            await candidate.save();
            return res.json(candidate);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    delete: async (req: e.Request, res: e.Response) => {
        const { id } = req.params;
        
        try {
            const candidate = await Candidate.findByPk(id);
            if (!candidate) {
                return res.status(404).json({ message: 'Candidate not found' });
            }

            await candidate.destroy();
            return res.status(200).json({ message: 'Candidate deleted', candidate });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};