import styled from "styled-components";

const TextboxContainer = styled.div`
  max-width: 120px;
  margin: auto;
  margin-top: 2%;
`;

const StyledInput = styled.input`
  font-size: 44px;
  width: 120px;
  text-align: center;
`;

const Textbox = ({ checkSubmit }: { checkSubmit: Function }) => {
  return (
    <TextboxContainer>
      <StyledInput
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            checkSubmit(e.target.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </TextboxContainer>
  );
};

export default Textbox;
