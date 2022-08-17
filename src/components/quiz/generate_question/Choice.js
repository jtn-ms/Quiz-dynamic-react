const Choice = function (props) {
  return (
    <div className="quiz__input-box">
      <label htmlFor={props.reference}>{props.answer}</label>
      <input
        id={props.reference}
        type="radio"
        className="quiz__radio"
        name="option"
        value={props.answer}
      />
    </div>
  );
};

export default Choice;
