import objData from "../../../data_storage";

const UserAnswers = function (props) {
  return (
    <div className="quiz__answer">
      {objData.answerStored.map((el, i) => {
        return (
          <div key={i} className="quiz__question-answer">
            <h2 className="quiz__question">{props.questionArr[i].question}</h2>
            <h3 className="quiz__user-answers">{el}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserAnswers;
