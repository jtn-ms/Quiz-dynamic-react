const Buttons = function (props) {
  return (
    <div className="quiz__process">
      <span className="quiz__completed">
        Question completed: <span className="current">{props.current}</span> /
        <span className="max"> 5</span>
      </span>
      <div className="quiz__btn-container">
        <button
          className="quiz__btn quiz__btn--next quiz__btn--green"
          onClick={props.onNextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Buttons;
