import styled from "styled-components";

const ResponseContainer = styled.div`
  width: 220px;
  height: 40px;
  border-radius: 10px;
  margin: auto;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Have incorrect text be red and slightly bigger for better notice
  font-size: ${(props) =>
    props.response === "Correct!" || props.response === "Type and press Enter" ? "1em" : "2em"};
  color: ${(props) =>
    props.response === "Correct!" || props.response === "Type and press Enter" ? "white" : "red"};

  // When user is wrong, have the correct romaji fade out
  transition: opacity 7s;
  opacity: ${(props) =>
    props.response !== "Correct!" && props.response !== "Type and press Enter" ? 0 : 1};
`;

const Hiragana = ({ response }: { response: string }) => {
  return <ResponseContainer response={response}>{response}</ResponseContainer>;
};

export default Hiragana;
