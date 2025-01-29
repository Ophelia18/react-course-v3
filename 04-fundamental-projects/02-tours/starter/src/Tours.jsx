import Tour from './Tour';
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
