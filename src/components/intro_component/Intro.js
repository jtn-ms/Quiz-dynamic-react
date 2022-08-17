import { useState } from "react";

import Topic from "./Topic";
import AppQuiz from "../quiz/AppQuiz";

const Intro = function () {
  const [showQuiz, setQuiz] = useState(false);
  const [topic, setTopic] = useState("");

  const delegation = function (e) {
    const target = e.target.closest(".topic");
    if (!target) return;

    const topic = target.querySelector(".topic__title").textContent;

    setQuiz(true);
    setTopic(topic);
  };

  // Topics will show first
  if (!showQuiz) {
    return (
      <div className="quiz__intro-content">
        <h1 className="quiz__topic-heading">Choose your quiz!!</h1>
        <div className="quiz__topics" onClick={delegation}>
          <Topic
            imgPath={require("../../images/animal.jpg")}
            alt={"Animals"}
            about={"Animals"}
            imgName={"quiz__img"}
          />

          <Topic
            imgPath={require("../../images/earth.jpg")}
            alt={"Earth"}
            about={"Earth"}
            imgName={"quiz__img"}
          />

          <Topic
            imgPath={require("../../images/plant.jpg")}
            alt={"Nature"}
            about={"Nature"}
            imgName={"quiz__img"}
          />
        </div>
      </div>
    );
  }

  return <AppQuiz topic={topic} />;
};

export default Intro;
