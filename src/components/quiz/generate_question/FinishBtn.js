const FinishBtn = function (props) {
  const finishInterface = function () {
    props.onSubmit(true);
  };

  return (
    <div className="quiz__process">
      <div className="quiz__btn-container">
        <button
          className="quiz__btn quiz__btn--submit quiz__btn--green"
          onClick={finishInterface}
        >
          show results
        </button>
      </div>
    </div>
  );
};

export default FinishBtn;
