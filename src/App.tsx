import { useEffect, useState } from "react";
import "./App.css";

import Hiragana from "./components/Hiragana";
import Scoreboard from "./components/Scoreboard";
import Textbox from "./components/Textbox";
import Response from "./components/Response";

import getRandomNum from "./helpers/getRandomNum";
import { hiraganaRomaji } from "./constants/hiraganaRomaji";

function App() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [randomNum, setRandomNum] = useState(getRandomNum());
  const [response, setReponse] = useState("Type and press Enter");

  const checkSubmitAndUpdateNum = (userInput: string) => {
    const correctRomaji = hiraganaRomaji[randomNum].romaji;
    if (userInput === correctRomaji) {
      setCorrect(correct + 1);
      setReponse("Correct!");
    } else {
      setIncorrect(incorrect + 1);
      setReponse(hiraganaRomaji[randomNum].romaji);
    }
    setRandomNum(getRandomNum());
  };

  return (
    <div className="App">
      <Scoreboard correct={correct} incorrect={incorrect} />
      <Hiragana character={hiraganaRomaji[randomNum].hiragana} />
      <Response response={response} />
      <Textbox checkSubmit={checkSubmitAndUpdateNum} />
    </div>
  );
}

export default App;
