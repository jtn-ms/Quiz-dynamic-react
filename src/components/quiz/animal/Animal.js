import AnimalQuestion from "./AnimalQuestion";
import GenerateQuestion from "../generate_question/GenerateQuestion";

const Animal = function () {
  const topic = "About Animals";

  return <GenerateQuestion questionContainer={AnimalQuestion} topic={topic} />;
};

export default Animal;
