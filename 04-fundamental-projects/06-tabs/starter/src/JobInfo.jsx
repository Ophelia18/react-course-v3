import Duties from './Duties';

const JobInfo = ({ title, dates, duties, company }) => {
  return (
    <article>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
