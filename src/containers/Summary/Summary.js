import Score from "./Score/Score";
import Answers from "./Answers/Answers";
import Buttons from "./Buttons/Buttons";
import Spinner from "../../components/Spinner/Spinner";
import Aux from "../../components/Aux/Aux";

import { useEffect, useState } from "react";

const Summary = () => {
  const [summary, setSummary] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSummary(true);
    }, 500);
  });

  return summary ? (
    <Aux>
      <Score />
      <Answers />
      <Buttons />
    </Aux>
  ) : (
    <Spinner />
  );
};

export default Summary;
