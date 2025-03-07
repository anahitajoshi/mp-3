import { styled } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

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

const StyledMain = styled.main`
  max-width: 70%;
  min-width: 70%;
  display: flex;
  flex-direction: column;
  background-color: rgb(170, 233, 247);
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    min-height: auto;
    overflow: hidden;
    justify-content: center;
  }
`;

const StyledH3 = styled.h3`
  margin: 2vw 0;
  text-align: center;
  font-size: calc(4px + 4vw);
  color: white;

  @media screen and (max-width: 750px) {
    color: white;
    margin: 2vh 0;
    font-size: calc(5px + 5vw);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px
  }
`;

const StyledContents = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2vh 2vw;

  @media screen and (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
    height: 100vh;
    justify-content: flex-start;
  }
`;


const StyledTextContents = styled.div`
  align-self: center;
  max-width: 60%;
  margin: 1vh 1vw;

  @media screen and (max-width: 750px) {
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
  }

`;

const StyledP = styled.p`
  margin: 3vh auto;
  max-width: 90%;
  font-size: calc(1.5px + 1.5vw);

  @media screen and (max-width: 750px) {
    margin: 2% 2%;
    font-size: calc(1.5px + 1.5vw);
  }
`;

const StyledH4 = styled.h4`
  margin: 1.5vw 0;
  text-align: center;
  font-size: calc(1.5px + 1.5vw);
  color: white;
`;

export default function Experience() {
  return (
    <StyledWrapper>

      <Header />
      <StyledContainer>

        <Nav />
        <StyledMain>

          <StyledH3>Experience</StyledH3>

          <StyledContents>

            <StyledTextContents>
              <StyledH4>Software Engineering, R&D, Product Management Intern</StyledH4>
              <StyledP>Boardwalktech, Inc. | June 2024 - Present</StyledP>
              <StyledP>Spearheaded the improvement of search algorithms using data attribute chaining & delta analysis to
                enhance
                document intelligence & improve performance across large supply chain datasets.</StyledP>

              <StyledH4>Accounts Payable & Procure to Pay Office Assistant</StyledH4>
              <StyledP>Boston University | February 2024 - Present</StyledP>

              <StyledH4>Resident Assistant</StyledH4>
              <StyledP>Boston University | May 2023 - August 2024</StyledP>
              <StyledP>Fostered an inclusive environment for 1800+ students transitioning into college life, emphasizing
                community
                development through event programming while acting as primary liaison & utilizing conflict-mediation &
                crisis
                intervention skills through 24-hour on-call support.</StyledP>
            </StyledTextContents>


          </StyledContents>
        </StyledMain>

      </StyledContainer>

      <Footer />
    </StyledWrapper>
  );
}