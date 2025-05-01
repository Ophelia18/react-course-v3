import { useState } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { toast, ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';

const setLocalStorage = (items) => {
  localStorage.setItem('items', JSON.stringify(items));
};
const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items') || []),
  );
  const addItem = (name) => {
    const newItems = [...items, { id: nanoid(), name, complete: false }];
    setItems(newItems);
    toast.success('Item Added!');
    setLocalStorage(newItems);
  };
  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error('Item deleted!');
  };

  return (
    <section className=' section-center'>
      <Form addItem={addItem} />
      <ItemList items={items} editItem={editItem} deleteItem={deleteItem} />
      <ToastContainer position='top-center' />
    </section>
  );
};

export default App;
