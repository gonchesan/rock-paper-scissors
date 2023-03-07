import { useEffect, useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

import "./App.scss";
import Background from "./components/Background";
import SelectMode from "./components/modals/SelectMode";
import Result from "./components/modals/Result";
import Rules from "./components/modals/Rules";
import { Picks } from "./model/Pick";

const App = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("...");
  const [playerPick, setPlayerPick] = useState<Picks | null>();
  const [computerPick, setComputerPick] = useState<Picks | null>();
  const choices = [
    { name: "rock", losesTo: ["paper", "spock"] },
    { name: "paper", losesTo: ["scissors", "lizard"] },
    { name: "scissors", losesTo: ["rock", "spock"] },
    { name: "lizard", losesTo: ["rock", "scissors"] },
    { name: "spock", losesTo: ["paper", "lizard"] },
  ];

  const [mode, setMode] = useState<null | string>(null);
  function getRandomChoice() {
    let newChoice;
    if (mode === "normal") {
      newChoice = choices[Math.floor(Math.random() * (choices.length - 2))];
    } else {
      newChoice = choices[Math.floor(Math.random() * choices.length)];
    }
    setComputerPick(newChoice);
  }
  function selectOption(index: string) {
    const newChoice = choices.find((option) => option.name === index);
    getRandomChoice();
    setPlayerPick(newChoice);
    setModals({ ...modals, result: true });
  }
  function checkResult() {
    if (playerPick && computerPick)
      if (playerPick.name === computerPick.name) {
        setResult("draw");
      } else if (playerPick.losesTo.includes(computerPick.name)) {
        setResult("lose");
      } else {
        setResult("win");
        setScore(score + 1);
      }
  }

  function playAgain() {
    setScore(0);
    setPlayerPick(null);
    setComputerPick(null);
    setResult("");
  }

  function restartGame() {
    setPlayerPick(null);
    setComputerPick(null);
    setResult("...");
    setMode(null);
    setScore(0);
  }

  useEffect(() => {
    checkResult();
  }, [computerPick, playerPick]);

  const [modals, setModals] = useState({
    mode: true,
    result: false,
    rules: false,
  });

  function openRuleModal() {
    setModals({ ...modals, rules: true });
  }

  /**
   * TODO ::::::::::::::::::::::::::::::::::::::::::
 * 
Imagen de 2 modos
Fondo para jugar
Colocar los iconos en las cards de que se escogi
Agregar framer motion
 */

  return (
    <>
      {!mode ? <Background /> : null}
      <Header mode={mode} score={score} />
      {!mode ? (
        <SelectMode setModals={setModals} modals={modals} setMode={setMode} />
      ) : (
        <Board
          mode={mode}
          choices={choices}
          selectOption={selectOption}
          openRulesModal={openRuleModal}
          restartGame={restartGame}
        />
      )}
      {playerPick && computerPick ? (
        <Result
          setModals={setModals}
          modals={modals}
          result={result}
          playAgain={playAgain}
          restartGame={restartGame}
          picks={{
            playerPick: playerPick.name,
            computerPick: computerPick.name,
          }}
        />
      ) : null}
      {modals.rules ? (
        <Rules setModals={setModals} modals={modals} mode={mode} />
      ) : null}
    </>
  );
};

export default App;
