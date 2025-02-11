import { useState } from 'react';
import data from './data';
import Questions from './Questions';
const App = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const toggleId = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
      return;
    }
    setActiveQuestion(id);
  };
  return (
    <main>
      <Questions
        questions={data}
        activeQuestion={activeQuestion}
        toggleId={toggleId}
      />
    </main>
  );
};
export default App;
