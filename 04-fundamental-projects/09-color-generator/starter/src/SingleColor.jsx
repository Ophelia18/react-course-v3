import { toast } from 'react-toastify';

const SingleColor = ({ color }) => {
  const handleClick = () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${color.hex}`);
        toast.success('Color copied to clipboard!');
      } catch (error) {
        toast.error('Clipboard is not available!');
      }
    }
  };

  return (
    <article
      style={{
        backgroundColor: `#${color.hex}`,
      }}
      className={color.type === 'shade' ? 'color color-light' : 'color'}
      onClick={handleClick}
    >
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'>#{color.hex}</p>
    </article>
  );
};
export default SingleColor;
