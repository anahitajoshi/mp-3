import { styled } from "styled-components";
import Header from "../../Header";
import Nav from "../../Nav";
import Footer from "../../Footer";
import Calculator from "./Calculator";

const StyledWrapper = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  gap: 50px;

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    gap: 0px;
    min-height: 100vh;
  }
`;



export default function Projects() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <Nav />
        <Calculator />
      </StyledContainer>
      <Footer />
    </StyledWrapper>
  );
}