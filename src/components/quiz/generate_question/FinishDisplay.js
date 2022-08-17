import objData from "../../../data_storage";

const FinishDisplay = function (props) {
  return (
    <div className="quiz__answer">
      {props.questionContainer.map((el, i) => {
        let answer;

        if (el.cor_ans === objData.answerStored[i]) {
          answer = (
            <h3 key={i} className="quiz__question">
              {objData.answerStored[i]} (✅)
            </h3>
          );
        } else {
          answer = (
            <h3 className="quiz__user-answers">
              {" "}
              {objData.answerStored[i]} (❌)
            </h3>
          );
        }

        return (
          <div key={i} className="quiz__question-answer">
            <h2 className="quiz__question">{el.question}</h2>
            {answer}
          </div>
        );
      })}
    </div>
  );
};

export default FinishDisplay;
