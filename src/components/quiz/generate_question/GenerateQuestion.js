import { useState } from "react";
import objData from "../../../data_storage";

import QuizContent from "../quiz_content/QuizContent";
import Buttons from "./Buttons";

import UserAnswers from "./UserAnswers";

import FinishBtn from "./FinishBtn";
import FinishDisplay from "./FinishDisplay";

import Intro from "../../intro_component/Intro";
import ResetTopic from "./ResetTopic";

const GenerateQuestion = function (props) {
  const [curIntro, setIntro] = useState(false);
  const [submit, isSubmit] = useState(false);
  const [count, setCount] = useState(0);

  const nextQuestion = function (e) {
    e.preventDefault();
    setCount(count + 1);

    const getRadioValue = document.querySelectorAll(".quiz__radio");

    // it will add the value of answer and checked to false
    for (const [i, val] of getRadioValue.entries()) {
      if (val.checked) {
        objData.answerStored.push(val.value);
        val.checked = false;
        break;
      }

      if (i === 3) {
        alert("make sure you answered before proceed");
        setCount(count);
      }
    }
  };

  const resetTopic = function () {
    setIntro(true);
    setCount(0);
    isSubmit(false);
    objData.answerStored = [];
  };

  let btn;
  let content;
  let IntroVal;
  if (submit) {
    content = <FinishDisplay questionContainer={props.questionContainer} />;
    btn = <ResetTopic onResetTopic={resetTopic} />;
  }

  if (!submit) {
    if (count < 5) {
      btn = <Buttons current={count + 1} onNextQuestion={nextQuestion} />;
      content = (
        <QuizContent
          questionContainer={props.questionContainer}
          currQuestion={count}
        />
      );
    }

    if (count === 5) {
      btn = <FinishBtn onSubmit={isSubmit} />;
      content = <UserAnswers questionArr={props.questionContainer} />;
    }
  }

  if (!curIntro) {
    IntroVal = (
      <div className="quiz__container">
        <h2 className="quiz__topic-heading">{props.topic}</h2>
        <div className="quiz__question-container">
          {content}
          {btn}
        </div>
      </div>
    );
  } else {
    IntroVal = <Intro />;
  }

  return IntroVal;
};

export default GenerateQuestion;
