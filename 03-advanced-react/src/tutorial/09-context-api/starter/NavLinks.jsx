import UserContainer from './UserContainer';

const NavLinks = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul style={{ display: 'flex' }}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
export default NavLinks;
