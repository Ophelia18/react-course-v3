import { useState } from 'react';
import data from './data';
const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id, image, age, name } = person;
          return (
            <div className='person' key={id}>
              <img src={image} alt={name} className='img' />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          );
        })}
        <button className='btn btn-block' onClick={() => setPeople([])}>
          {' '}
          clear list
        </button>
      </section>
    </main>
  );
};
export default App;
