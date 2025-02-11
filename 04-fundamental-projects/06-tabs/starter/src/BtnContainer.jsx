const BtnContainer = ({ jobs, setActiveJob, activeJob }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job, i) => (
        <button
          key={job.id}
          onClick={() => setActiveJob(i)}
          className={activeJob === i ? 'active-btn job-btn' : 'job-btn'}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};
export default BtnContainer;
