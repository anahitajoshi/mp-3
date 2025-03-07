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


export default function Education() {
  return (
    <StyledWrapper>

      <Header />

      <StyledContainer>

        <Nav />

        <StyledMain>

          <StyledH3>Education</StyledH3>

          <StyledContents>


            <StyledTextContents>
              <StyledH4>Boston University</StyledH4>
              <StyledP>Boston, Massachusetts | January 2022 - May 2025</StyledP>
              <StyledP><strong>BA in Computer Science</strong>; Minor in Business Administration & Management</StyledP>
              <StyledP><strong>Dean’s List</strong></StyledP>

              <StyledH4>Principal Courses:</StyledH4>
              <StyledP>Software Engineering, Database Systems, Information Security, Data Science Applications, Accounting,
                Business Law, Analysis of Algorithms, Probability in Computing, Statistical Decision-Making for
                Management,
                Computer Systems, Microeconomics, Macroeconomics</StyledP>
            </StyledTextContents>

          </StyledContents>
        </StyledMain>
      </StyledContainer>

      <Footer />
    </StyledWrapper>
  );
}