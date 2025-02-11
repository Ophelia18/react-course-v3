import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const categories = [
  'All',
  ...Array.from(new Set(menu.map((item) => item.category))),
];
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    const newItems = menu.filter(
      (item) => item.category === category || category === 'All',
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
