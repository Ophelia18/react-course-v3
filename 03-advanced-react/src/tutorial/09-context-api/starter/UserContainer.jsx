import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, login, logout } = useAppContext();
  return (
    <div style={{ display: 'flex' }}>
      <div>{user ? `Hello ${user.name}` : 'Please Login'}</div>
      <button type='button' onClick={user ? logout : login}>
        {user ? 'logout' : 'login'}
      </button>
    </div>
  );
};
export default UserContainer;
