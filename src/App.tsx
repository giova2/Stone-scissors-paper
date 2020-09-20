import React, { useState, useEffect } from "react";
import "./App.css";
import { Option, Result } from "./types";
import { machinePlay, checkWinner } from "./functions";

function App() {
  const [selection, setSelection] = useState<Option | null>(null);
  const [machineElection, setMachineElection] = useState<Option | null>(null);
  const [result, setResult] = useState<string>("");
  const [bufferUserName, setBufferUserName] = useState("");
  const [userName, setUserName] = useState("");
  const [qtyHumanWins, setQtyHumanWins] = useState(0);
  const [qtyMachineWins, setQtyMachineWins] = useState(0);

  useEffect(() => {
    if (selection !== null) {
      const machineE = machinePlay();
      setMachineElection(machineE);
      const res = checkWinner(selection, machineE);
      setResult(res);
      switch (res) {
        case Result.WIN:
          setQtyHumanWins(qtyHumanWins + 1);
          break;
        case Result.LOSE:
          setQtyMachineWins(qtyMachineWins + 1);
          break;
      }
    }
  }, [selection]);

  const resetVariables = () => {
    setSelection(null);
    setMachineElection(null);
    setResult("");
    setBufferUserName("");
    setUserName("");
    setQtyHumanWins(0);
    setQtyMachineWins(0);
  };
  const renderPutYourName = () => {
    return (
      <section className="game-field" style={{ height: "90vh" }}>
        <form
          onSubmit={() => setUserName(bufferUserName)}
          className="ml-4 mr-4 w-full md:w-1/2 flex flex-col justify-center"
        >
          <input
            type="text"
            className="text-black p-2 font-bold"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              e.preventDefault && setBufferUserName(e.currentTarget.value)
            }
            placeholder="Insert your name and press Confirm"
          />
          <input
            className="bg-blue-700 mt-3 p-2 font-bold hover:bg-blue-400 hover:text-black cursor-pointer text-center"
            type="submit"
            value="Confirm"
          />
        </form>
      </section>
    );
  };
  const renderGame = () => {
    if (userName === "") {
      return renderPutYourName();
    }
    return (
      <section className="game-field flex-wrap">
        {selection !== null && (
          <div className="w-full flex justify-center items-center">
            <button
              className="bg-blue-700 mt-3 p-2 font-bold hover:bg-blue-400 hover:text-black cursor-pointer text-center"
              onClick={() => setSelection(null)}
            >
              Play Again!
            </button>
            <button
              className="bg-blue-700 mt-3 p-2 font-bold hover:bg-blue-400 hover:text-black cursor-pointer text-center ml-2"
              onClick={() => resetVariables()}
            >
              Restart Game!
            </button>
          </div>
        )}

        <div
          className="option-container m-1 sm:m-4 hover:bg-white border-white border-2 rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => selection === null && setSelection(Option.STONE)}
        >
          <span className="option" role="img" aria-label="scissors">
            ✊🏽
          </span>
        </div>
        <div
          className="option-container m-1 sm:m-4 hover:bg-white border-white border-2 rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => selection === null && setSelection(Option.SCISSORS)}
        >
          <span className="option" role="img" aria-label="scissors">
            ✌🏽
          </span>
        </div>
        <div
          className="option-container m-1 sm:m-4 hover:bg-white border-white border-2 rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => selection === null && setSelection(Option.PAPER)}
        >
          <span className="option" role="img" aria-label="scissors">
            ✋🏽
          </span>
        </div>
      </section>
    );
  };

  const renderMessage = () => {
    if (selection === null) {
      return "Ready to play!";
    }
    return (
      <div>
        {userName} choose <b className="text-red-400">{selection}</b> and
        machine choose <b className="text-red-400">{machineElection}</b>, so you{" "}
        <b className="text-blue-400">{result}</b>
      </div>
    );
  };
  const renderScore = () => {
    if (userName !== "") {
      return (
        <>
          <section
            className="game-score"
            data-user={userName}
            data-machine="Machine"
          >
            <div className="w-1/2 font-bold border-gray-800 border-2 flex justify-center items-center">
              <span className="flex-grow text-center text-2xl">
                {qtyHumanWins}&nbsp;
              </span>
              <span className="flex-grow text-center text-2xl">|</span>
              <span className="flex-grow text-center text-2xl">
                &nbsp;{qtyMachineWins}
              </span>
            </div>
          </section>
          <section className="game-messages">
            <div className="w-full font-bold flex justify-center items-center">
              <h1 className="text-center text-2xl">{renderMessage()}</h1>
            </div>
          </section>
        </>
      );
    }
  };
  return (
    <div className="App">
      <header className="App-header text-2xl font-extrabold">
        <h1>Stone-Paper-Scissors GAME</h1>
      </header>
      {renderScore()}
      {renderGame()}
    </div>
  );
}

export default App;
