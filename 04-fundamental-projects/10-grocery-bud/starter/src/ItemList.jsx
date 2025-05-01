import SingleItem from './SingleItem';

const ItemList = ({ items, editItem, deleteItem }) => {
  return (
    <div className=' items'>
      {items.map((item) => (
        <SingleItem
          item={item}
          key={item.id}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};
export default ItemList;
