import { useState } from 'react';
import { people } from '../../../data';
const UseStateObject = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(people[count].name);
  const [age, setAge] = useState(people[count].age);
  const [hobby, setHobby] = useState(people[count].hobby);
  return <h2>useState object example</h2>;
};

export default UseStateObject;
