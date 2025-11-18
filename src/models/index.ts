import { Candidate } from './candidate';
import { Company } from './companies';
import { Job } from './jobs';

Candidate.belongsToMany(Job, {
    through: 'jobs_candidates',
})

Company.hasMany(Job);

Job.belongsTo(Company);
Job.belongsToMany(Candidate, {
    through: 'jobs_candidates',
});

export {
    Candidate,
    Company,
    Job
};