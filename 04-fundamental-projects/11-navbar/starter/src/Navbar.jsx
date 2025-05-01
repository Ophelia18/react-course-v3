import { useRef, useState } from 'react';
import { links, social } from './data';
import img from './logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className=' nav-center'>
        <div className='nav-header'>
          <img src={img} alt='logo' className='logo' />
          <button type='button' className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className='links-container'
          ref={linksContainerRef}
          style={{
            height: showLinks
              ? `${linksRef.current.getBoundingClientRect().height}px`
              : '0px',
          }}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url}>{icon.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
