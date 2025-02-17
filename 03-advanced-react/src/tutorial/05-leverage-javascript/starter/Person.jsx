import defaultImg from './../../../assets/default-avatar.svg';
const Person = ({ name, images, nickName = 'default name' }) => {
  const img = images?.[0]?.small?.url || defaultImg;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h3>{name}</h3>
      <p>NickName :{nickName || 'default value'}</p>
    </div>
  );
};
export default Person;
