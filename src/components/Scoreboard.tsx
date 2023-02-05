import styled from "styled-components";

const ScoreboardContainer = styled.div`
  width: 420px;
  height: 220px;
  border-radius: 10px;
  margin: auto;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
`;

const CorrectScore = styled.div`
  color: green;
  width: 200px;
  text-align: right;
`;

const IncorrectScore = styled.div`
  color: red;
  width: 200px;
  text-align: left;
`;

const Divider = styled.div`
  text-align: center;
  padding: 0px 20px;
`;

const Scoreboard = ({ correct, incorrect }: { correct: number; incorrect: number }) => {
  return (
    <ScoreboardContainer>
      <CorrectScore>{correct}</CorrectScore>
      <Divider> - </Divider>
      <IncorrectScore>{incorrect}</IncorrectScore>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
