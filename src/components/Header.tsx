import { styled } from "styled-components";

const StyledHeader = styled.header`
  padding: 2.5vh 2.5vw;
  background-color: black;
  color: white;

  @media screen and (max-width: 750px) {
    text-align: center;
    padding: 10px 0;
    align-items: center;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const StyledP = styled.p`
  margin: 0;
`;


export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Anahita Joshi</StyledH1>
      <StyledP>Online Resume</StyledP>
    </StyledHeader>
  );
}