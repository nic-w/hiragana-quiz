import React from "react";
import styled from "styled-components";

interface Props {
  useHiragana: boolean;
  setUseHiragana: React.Dispatch<React.SetStateAction<boolean>>;
  useAddtlHiragana: boolean;
  setUseAddtlHiragana: React.Dispatch<React.SetStateAction<boolean>>;
  useCombinedHiragana: boolean;
  setUseCombinedHiragana: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxContainer = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  width: 180px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  padding-left: 80px;
`;

const Checkboxes = (props: Props) => {
  return (
    <CheckboxContainer>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={props.useHiragana}
          onChange={(e) => {
            e.preventDefault();
            if (props.useAddtlHiragana || props.useCombinedHiragana) {
              props.setUseHiragana(e.target.checked);
            }
          }}
        />
        Hiragana
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={props.useAddtlHiragana}
          onChange={(e) => {
            e.preventDefault();
            if (props.useHiragana || props.useCombinedHiragana) {
              props.setUseAddtlHiragana(e.target.checked);
            }
          }}
        />
        Diacritical
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={props.useCombinedHiragana}
          onChange={(e) => {
            e.preventDefault();
            if (props.useAddtlHiragana || props.useHiragana) {
              props.setUseCombinedHiragana(e.target.checked);
            }
          }}
        />
        Combination
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkboxes;
