import Question from './Question';

const Questions = ({ questions, activeQuestion, toggleId }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeQuestion={activeQuestion}
            toggleId={toggleId}
          />
        );
      })}
    </section>
  );
};
export default Questions;
