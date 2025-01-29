import { useState } from 'react';
import Tours from './Tours';
import { useEffect } from 'react';
import Loading from './Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />;
      </main>
    );
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};
export default App;
