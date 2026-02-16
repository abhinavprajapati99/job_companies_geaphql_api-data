import JobList from '../components/JobList';
import { jobs } from '../lib/fake-data';
import { getJobs } from '../lib/queries';

function HomePage() {

  getJobs().then((data) => console.log("datadata", data))
  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
