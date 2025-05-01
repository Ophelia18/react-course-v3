const SingleItem = ({ item, deleteItem, editItem }) => {
  return (
    <div className=' single-item'>
      <input
        type='checkbox'
        name='checkbox'
        checked={item.complete}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textDecoration: `${item.complete ? 'line-through' : ''}`,
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className=' remove-btn btn'
        onClick={() => deleteItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
