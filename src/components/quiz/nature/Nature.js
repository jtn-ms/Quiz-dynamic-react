import NatureQuestion from "./NatureQuestion";
import GenerateQuestion from "../generate_question/GenerateQuestion";

const Nature = function () {
  const topic = "About Nature";

  return <GenerateQuestion questionContainer={NatureQuestion} topic={topic} />;
};

export default Nature;
