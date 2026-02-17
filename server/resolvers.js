import { getCompany } from './db/companies.js';
import { getJobByCompanyId, getJobs } from './db/jobs.js';
import { getJob } from './db/jobs.js';

export const resolvers = {
  Query: {
    company: (_roots, { id }) => getCompany(id),
    job: (_roots, { id }) => getJob(id),
    jobs: () => getJobs(),
  },

  Company: {
    jobs: (company) => getJobByCompanyId(company.id)
  },
  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt),
  },
};

function toIsoDate(value) {
  return value.slice(0, 'yyyy-mm-dd'.length);
}
