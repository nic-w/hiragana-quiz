import { useEffect, useState } from "react";
import "./App.css";

import Hiragana from "./components/Hiragana";
import Scoreboard from "./components/Scoreboard";
import Textbox from "./components/Textbox";
import Response from "./components/Response";
import Checkboxes from "./components/Checkboxes";
import GithubIcon from "./components/GithubIcon";

import getRandomNum from "./helpers/getRandomNum";
import {
  hiraganaRomaji,
  dakutenHandakutenRomaji,
  combinedHiragana,
} from "./constants/hiraganaRomaji";

function App() {
  // Initial page load always uses random original hiragana
  const [character, setCharacter] = useState(hiraganaRomaji[getRandomNum(46)]);
  const [response, setReponse] = useState("Type and press Enter");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [useHiragana, setUseHiragana] = useState<boolean>(true);
  const [useAddtlHiragana, setUseAddtlHiragana] = useState<boolean>(false);
  const [useCombinedHiragana, setUseCombinedHiragana] = useState<boolean>(false);

  const [questions, setQuestions] = useState<Question[]>([]);

  interface Question {
    hiragana: string;
    romaji: string;
  }

  useEffect(() => {
    let selectedArrays: Question[] = [];
    if (useHiragana) selectedArrays = selectedArrays.concat(hiraganaRomaji);
    if (useAddtlHiragana) selectedArrays = selectedArrays.concat(dakutenHandakutenRomaji);
    if (useCombinedHiragana) selectedArrays = selectedArrays.concat(combinedHiragana);
    setQuestions(selectedArrays);
  }, [useHiragana, useAddtlHiragana, useCombinedHiragana]);

  const checkSubmitAndUpdateNum = (userInput: string) => {
    if (userInput === character.romaji) {
      setCorrect(correct + 1);
      setReponse("Correct!");
    } else {
      setIncorrect(incorrect + 1);
      setReponse(`${character.hiragana} = ${character.romaji}`);
    }
    setCharacter(questions[getRandomNum(questions.length)]);
  };

  return (
    <div className="App">
      <Scoreboard correct={correct} incorrect={incorrect} />
      <Hiragana character={character.hiragana} />
      <Response response={response} />
      <Textbox checkSubmit={checkSubmitAndUpdateNum} />
      <Checkboxes
        useHiragana={useHiragana}
        setUseHiragana={setUseHiragana}
        useAddtlHiragana={useAddtlHiragana}
        setUseAddtlHiragana={setUseAddtlHiragana}
        useCombinedHiragana={useCombinedHiragana}
        setUseCombinedHiragana={setUseCombinedHiragana}
      />
      <GithubIcon />
    </div>
  );
}

export default App;
