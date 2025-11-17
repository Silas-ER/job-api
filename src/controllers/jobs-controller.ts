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
        const { title, description, limitDate, companyId } = req.body;
        try {
            const job = await Job.create({ title, description, limitDate, companyId });
            return res.status(201).json(job);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    show: async (req: e.Request, res: e.Response) => { 
        const { id } = req.params;

        try {
            const job = await Job.findByPk(id , { include: ['company'] });

            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }

            return res.json(job);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    update: async (req: e.Request, res: e.Response) => {
        const { id } = req.params;
        const { title, description, limitDate, companyId } = req.body;
        
        try {
            const [affectedRows, jobs] = await Job.update({ 
                title, 
                description, 
                limitDate, 
                companyId 
            }, { 
                where: { id }, 
                returning: true 
            });
            return res.json(jobs[0]);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    delete: async (req: e.Request, res: e.Response) => {
        const { id } = req.params;
        
        try {
            const job = await Job.findByPk(id);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }

            await job.destroy();
            return res.status(200).json({ message: 'Job deleted', job });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }    
};