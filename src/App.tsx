import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Board from "@/components/Board";
import Background from "@/components/Background";
import SelectModeModal from "@/components/Modals/SelectModeModal";
import ResultModal from "@/components/Modals/ResultModal";
import RulesModal from "@/components/Modals/RulesModal";
import Footer from "@/components/Footer";

import { CHOICESTOPLAY } from "@/utils/constants";
import useLocalStorage from "@/utils/useLocalStorage";

import { Choice } from "@/models/Choices";
import { Modals } from "@/models/Modals";

import "./App.scss";

const App = () => {
  const [score, setScore] = useLocalStorage("score", 0);
  const [mode, setMode] = useLocalStorage("mode", null);

  const [result, setResult] = useState<string>("");
  const [playerPick, setPlayerPick] = useState<Choice | null>();
  const [computerPick, setComputerPick] = useState<Choice | null>();
  const [modals, setModals] = useState<Modals>({
    mode: true,
    result: false,
    rules: false,
  });

  function getRandomChoice() {
    let newChoice;
    if (mode === "classic") {
      newChoice =
        CHOICESTOPLAY[Math.floor(Math.random() * (CHOICESTOPLAY.length - 2))];
    } else {
      newChoice =
        CHOICESTOPLAY[Math.floor(Math.random() * CHOICESTOPLAY.length)];
    }
    setComputerPick(newChoice);
  }

  function selectOption(index: string) {
    const newChoice = CHOICESTOPLAY.find((option) => option.name === index);
    getRandomChoice();
    setPlayerPick(newChoice);
    setModals({ ...modals, result: true });
  }
  function checkResult() {
    if (playerPick && computerPick)
      if (playerPick.name === computerPick.name) {
        setResult("draw");
      } else if (playerPick.loses.includes(computerPick.name)) {
        setResult("lose");
      } else {
        setResult("win");
        setScore(score + 1);
      }
  }

  function restartGame(selectMode: boolean) {
    setPlayerPick(null);
    setComputerPick(null);
    setResult("");
    setScore(0);
    if (selectMode) {
      setMode(null);
      window.localStorage.clear();
    }
  }

  function openRuleModal() {
    setModals({ ...modals, rules: true });
  }
  useEffect(() => {
    checkResult();
  }, [computerPick, playerPick]);

  return (
    <div className="app">
      {!mode ? <Background /> : null}
      {!mode ? (
        <SelectModeModal
          setModals={setModals}
          modals={modals}
          setMode={setMode}
        />
      ) : (
        <>
          <Header mode={mode} score={score} />
          <Board
            mode={mode}
            choices={CHOICESTOPLAY}
            selectOption={selectOption}
          />
          <Footer restartGame={restartGame} openRulesModal={openRuleModal} />
        </>
      )}
      {playerPick && computerPick ? (
        <ResultModal
          setModals={setModals}
          modals={modals}
          result={result}
          restartGame={restartGame}
          picks={{
            playerPick: playerPick.name,
            computerPick: computerPick.name,
          }}
        />
      ) : null}
      {modals.rules ? (
        <RulesModal setModals={setModals} modals={modals} mode={mode} />
      ) : null}
    </div>
  );
};

export default App;
