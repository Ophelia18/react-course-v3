import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const Question = ({ title, info, activeQuestion, toggleId, id }) => {
  // const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          // onClick={() => setShowAnswer(!showAnswer)}
          onClick={() => toggleId(id)}
          className='question-btn'
        >
          {/* {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {activeQuestion === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* {showAnswer && <p>{info}</p>} */}
      {activeQuestion === id && <p>{info}</p>}
    </article>
  );
};
export default Question;
