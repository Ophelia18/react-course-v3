import { createContext, useState } from 'react';
import NavLinks from './NavLinks';
import { useContext } from 'react';

const NavbarContext = createContext();
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const login = () => {
    setUser({ name: 'bob' });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, login, logout }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <h3>Context API</h3>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};
export default Navbar;
