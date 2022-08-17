const ResetTopic = function (props) {
  return (
    <div className="quiz__process">
      <div className="quiz__btn-container">
        <button
          className="quiz__btn quiz__btn--next quiz__btn--green"
          onClick={props.onResetTopic}
        >
          Choose another topic
        </button>
      </div>
    </div>
  );
};

export default ResetTopic;
