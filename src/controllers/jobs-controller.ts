import type e = require('express');
import { Job } from '../models';

export const jobsController = {
    index: async (req: e.Request, res: e.Response) => {
        try {
            const jobs = await Job.findAll(
                { include: ['company'] }
            );
            return res.json(jobs);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
        
    },

    save: async (req: e.Request, res: e.Response) => {
        const { name, bio, website, email } = req.body;
        try {
            const company = await Company.create({ name, bio, website, email });
            return res.status(201).json(company);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    show: async (req: e.Request, res: e.Response) => { 
        const { id } = req.params;

        try {
            const company = await Company.findByPk(id);

            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }

            return res.json(company);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    update: async (req: e.Request, res: e.Response) => {
        const { id } = req.params;
        const { name, bio, website, email } = req.body;
        
        try {
            const [affectedRows, companies] = await Company.update({ name, bio, website, email }, { where: { id }, returning: true });
            return res.json(companies[0]);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    delete: async (req: e.Request, res: e.Response) => {
        const { id } = req.params;
        
        try {
            const company = await Company.findByPk(id);
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }

            await company.destroy();
            return res.status(200).json({ message: 'Company deleted', company });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }    
};