import { useEffect, useState } from "react";

import OctogonalButton from "@/components/OctogonalButton";

import { BoardProps } from "@/models/Board";
import { Choice } from "@/models/Choices";

import "./styles.scss";

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
