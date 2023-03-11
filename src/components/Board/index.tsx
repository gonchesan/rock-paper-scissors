import { BoardProps } from "@/models/Board";
import { Choice } from "@/models/Choices";
import { CHOICESICONSTRING } from "@/constants";

import "./styles.scss";
import OctogonalButton from "../OctogonalButton";
import { useEffect, useState } from "react";

const Board: React.FC<BoardProps> = ({ mode, choices, selectOption }) => {
  const [optionsToRender, setOptionsToRender] = useState<Choice[]>(choices);

  useEffect(() => {
    mode === "classic"
      ? setOptionsToRender(choices.slice(0, 3))
      : setOptionsToRender(choices);
  }, [mode]);

  return (
    <div className="board">
      <div className="board__pieces">
        {optionsToRender.map((option: Choice) => (
          <OctogonalButton
            key={option.name}
            optionName={option.name}
            selectOption={selectOption}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
