import React from "react";
import styled from "styled-components";

interface Props {
  useAddtlHiragana: boolean;
  setUseAddtlHiragana: React.Dispatch<React.SetStateAction<boolean>>;
  useCombinedHiragana: boolean;
  setUseCombinedHiragana: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxContainer = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 9%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Checkboxes = (props: Props) => {
  return (
    <CheckboxContainer>
      <label>
        <input
          type="checkbox"
          checked={props.useAddtlHiragana}
          onChange={(e) => {
            props.setUseAddtlHiragana(e.target.checked);
          }}
        />
        Additional Hiragana
      </label>
      <label>
        <input
          type="checkbox"
          checked={props.useCombinedHiragana}
          onChange={(e) => {
            props.setUseCombinedHiragana(e.target.checked);
          }}
        />
        Combined Hiragana
      </label>
    </CheckboxContainer>
  );
};

export default Checkboxes;
