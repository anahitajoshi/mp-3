import { styled } from "styled-components";
import { useState } from "react";
import { StyledMain, StyledH3, StyledContents, StyledTextContents } from "../../ui-components/StyledComponents";


const StyledH4 = styled.h4`
  margin: 1.5vw 0;
  text-align: center;
  font-size: calc(1.5px + 1.5vw);
  color: white;
`;

// calculator styled components

const StyledCalculator = styled.div`
  max-width: 350px;
  margin: 20px auto;
  padding: 20px;
  background-color: black;
  text-align: center;

  @media screen and (max-width: 750px) {
    max-width: 90%;
    padding: 15px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: calc(2px + 3vw);
  text-align: center;

`;

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;


const StyledButton = styled.button`
  padding: 10px;
  background-color: pink;
  color: black;
  font-size: calc(2px + 1vw);
  border: none;
`


const StyledClearButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: pink;
  color: black;
  font-size: calc(2px + 1vw);
`;


//  must use a boolean prop here to make sure that the result is red if the result is negative!
// negative colors have red background, while the positive ones are transparent.
const StyledResult = styled.div<{ isNegative: boolean }>`
  padding: 10px;
  margin: 20px;
  font-size: calc(2px + 1vw);
  color:white;
  background-color: ${({ isNegative }) => (isNegative ? "red" : "transparent")};
`;

export default function Calculator() {
  // here's the functionality of the calculator
  // use UseState to create hook
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  // result uses setResult, is null at start.
  const [result, setResult] = useState<number | null>(null);

  // functions of the calculator, use setResult
  function inputtedNums() {
    return {
      inputOne: Number(inputOne),
      inputTwo: Number(inputTwo),
    };
  }

  function addition() {
    let { inputOne, inputTwo } = inputtedNums();
    setResult(inputOne + inputTwo);
  }

  function subtraction() {
    let { inputOne, inputTwo } = inputtedNums();
    setResult(inputOne - inputTwo);
  }

  function multiplication() {
    let { inputOne, inputTwo } = inputtedNums();
    setResult(inputOne * inputTwo);
  }

  function division() {
    let { inputOne, inputTwo } = inputtedNums();
    setResult(inputOne / inputTwo);
  }

  function power() {
    let { inputOne, inputTwo } = inputtedNums();
    let output = 1;
    for (let i = 0; i < inputTwo; i++) {
      output *= inputOne;
    }
    setResult(output);
  }

  function clearCalc() {
    setInputOne("");
    setInputTwo("");
    // the result goes back to null 
    setResult(null);
  }
  return (
    <StyledMain>
      <StyledH3>Projects</StyledH3>
      <StyledContents>
        <StyledTextContents>

          <StyledCalculator>
            <StyledH4>Calculator</StyledH4>
            <StyledInput
              type="number"
              value={inputOne}
              onChange={(e) => setInputOne(e.target.value)}
            />
            <StyledInput
              type="number"
              value={inputTwo}
              onChange={(e) => setInputTwo(e.target.value)} />

            <StyledButtons>
              <StyledButton onClick={addition}>+</StyledButton>
              <StyledButton onClick={subtraction}>-</StyledButton>
              <StyledButton onClick={multiplication}>*</StyledButton>
              <StyledButton onClick={division}>/</StyledButton>
              <StyledButton onClick={power}>^</StyledButton>
            </StyledButtons>

            <StyledClearButton onClick={clearCalc}>Clear</StyledClearButton>
            {/* if the result is anything but null, AND we set the isNegative boolean so the styled component knows what to do, and pass in calculated result. */}
            {result !== null && <StyledResult isNegative={result < 0}>{result}</StyledResult>}
          </StyledCalculator>

        </StyledTextContents>
      </StyledContents>
    </StyledMain>
  );
}