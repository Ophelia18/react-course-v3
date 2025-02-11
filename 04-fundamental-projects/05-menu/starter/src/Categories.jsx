const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((cat, i) => (
        <button
          type='button'
          className='btn'
          key={i}
          onClick={() => filterItems(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
export default Categories;
