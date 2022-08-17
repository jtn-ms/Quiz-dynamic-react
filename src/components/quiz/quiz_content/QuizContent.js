import Choice from "../generate_question/Choice";

const QuizContent = function (props) {
  return (
    <div className="quiz__content">
      <h2 className="quiz__title">
        {props.questionContainer[props.currQuestion].question}
      </h2>
      <form className="quiz__form">
        <div className="quiz__questions">
          <Choice
            reference="first__answer"
            answer={props.questionContainer[props.currQuestion].one_ans}
          />
          <Choice
            reference="two__answer"
            answer={props.questionContainer[props.currQuestion].two_ans}
          />
          <Choice
            reference="three__answer"
            answer={props.questionContainer[props.currQuestion].three_ans}
          />
          <Choice
            reference="four__answer"
            answer={props.questionContainer[props.currQuestion].four_ans}
          />
        </div>
      </form>
    </div>
  );
};

export default QuizContent;
