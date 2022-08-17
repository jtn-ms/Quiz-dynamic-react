import DataObj from "../../data_storage";

import Animal from "./animal/Animal";
import Earth from "./earth/Earth";
import Nature from "./nature/Nature";

const AppQuiz = function (prop) {
  if (prop.topic === "Animals") {
    DataObj.animal_quiz = true;
    return <Animal />;
  }

  if (prop.topic === "Earth") {
    DataObj.earth_quiz = true;
    return <Earth />;
  }

  if (prop.topic === "Nature") {
    DataObj.nature_quiz = true;
    return <Nature />;
  }
};

export default AppQuiz;
