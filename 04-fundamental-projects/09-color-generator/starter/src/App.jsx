import ColorList from './ColorList';
import Form from './Form';
import { useState } from 'react';
import Values from 'values.js';
import { toast, ToastContainer } from 'react-toastify';
const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(5));

  const addColor = (color) => {
    try {
      setColors(new Values(color).all(5));
      toast.success('Colors generated!');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
