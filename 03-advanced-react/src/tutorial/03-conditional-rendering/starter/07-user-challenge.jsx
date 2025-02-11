import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'john' });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <>
      {user ? <Login name={user.name} /> : <Logout />}
      <button
        type='button'
        className='btn'
        onClick={() => (user ? logout() : login())}
      >
        {user ? 'logout' : 'login'}
      </button>
    </>
  );
};

const Login = ({ name }) => <h4>hello there {name}</h4>;
const Logout = () => <h4>please login</h4>;
export default UserChallenge;
