import { useState } from "react";
import "./App.css";

import Hiragana from "./components/Hiragana";
import Scoreboard from "./components/Scoreboard";
import Textbox from "./components/Textbox";
import Response from "./components/Response";
import Checkboxes from "./components/Checkboxes";

import getRandomNum from "./helpers/getRandomNum";
import {
  hiraganaRomaji,
  dakutenHandakutenRomaji,
  combinedHiragana,
} from "./constants/hiraganaRomaji";

function App() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [character, setCharacter] = useState(hiraganaRomaji[getRandomNum(46)]);
  const [response, setReponse] = useState("Type and press Enter");

  const [useAddtlHiragana, setUseAddtlHiragana] = useState<boolean>(false);
  const [useCombinedHiragana, setUseCombinedHiragana] = useState<boolean>(false);

  const checkSubmitAndUpdateNum = (userInput: string) => {
    let hiraganaList = [...hiraganaRomaji];
    if (useAddtlHiragana) hiraganaList = [...hiraganaList, ...dakutenHandakutenRomaji];
    if (useCombinedHiragana) hiraganaList = [...hiraganaList, ...combinedHiragana];

    const correctRomaji = character.romaji;
    if (userInput === correctRomaji) {
      setCorrect(correct + 1);
      setReponse("Correct!");
    } else {
      setIncorrect(incorrect + 1);
      setReponse(character.romaji);
    }
    setCharacter(hiraganaList[getRandomNum(hiraganaList.length)]);
  };

  return (
    <div className="App">
      <Scoreboard correct={correct} incorrect={incorrect} />
      <Hiragana character={character.hiragana} />
      <Response response={response} />
      <Textbox checkSubmit={checkSubmitAndUpdateNum} />
      <Checkboxes
        useAddtlHiragana={useAddtlHiragana}
        setUseAddtlHiragana={setUseAddtlHiragana}
        useCombinedHiragana={useCombinedHiragana}
        setUseCombinedHiragana={setUseCombinedHiragana}
      />
    </div>
  );
}

export default App;
