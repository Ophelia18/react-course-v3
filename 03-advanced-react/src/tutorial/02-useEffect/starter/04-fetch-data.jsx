import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState('true');

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const response = await data.json();
      setPeople(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className='loading'></div>;
  }

  return (
    <>
      {!loading && (
        <ul className='users'>
          {people.map((person) => {
            const { avatar_url, html_url, login, id } = person;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} className='img' />
                <div className='info'>
                  <h5>{login}</h5>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default FetchData;
