import { Candidate } from './candidate';
import { Company } from './companies';
import { Job } from './jobs';

Company.hasMany(Job);
Job.belongsTo(Company);

export {
    Candidate,
    Company,
    Job
};