import styled from "styled-components";

const HiraganaContainer = styled.div`
  width: 350px;
  height: 220px;
  background-color: #323232;
  border-radius: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 160px;
  font-weight: bold;
`;

const Hiragana = ({ character }: { character: string }) => {
  return <HiraganaContainer>{character}</HiraganaContainer>;
};

export default Hiragana;
