import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(0);

  const fetchData = async () => {
    const data = await fetch(url).then((value) => value.json());
    // const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );

  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        setActiveJob={setActiveJob}
        activeJob={activeJob}
      />
      <JobInfo {...jobs[activeJob]} />
    </section>
  );
};
export default App;
