import EarthQuestion from "./EarthQuestion";
import GenerateQuestion from "../generate_question/GenerateQuestion";

const Earth = function () {
  const topic = "About Earth";

  return <GenerateQuestion questionContainer={EarthQuestion} topic={topic} />;
};

export default Earth;
