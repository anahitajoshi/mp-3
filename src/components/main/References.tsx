import { styled } from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

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



const StyledTable = styled.table`
  border: 1px solid white;
  text-align: center;
  table-layout: fixed;
  font-size: calc(1.5px + 1.5vw);

  @media screen and (max-width: 750px) {
    margin: -0.5% -12%;
  }
`;


const StyledTr = styled.tr`
`;

const StyledTh = styled.th`
  padding: 15px;
  width: 33.33%;
  word-wrap: break-word;
`;

const StyledTd = styled.td`
  padding: 15px;
  width: 33.33%;
  word-wrap: break-word;
`;

const StyledH4 = styled.h4`
  margin: 1.5vw 0;
  text-align: center;
  font-size: calc(1.5px + 1.5vw);
  color: white;
`;

export default function References() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <Nav />

        <StyledMain>

          <StyledH3>References</StyledH3>

          <StyledContents>

            <StyledTextContents>
              <StyledH4>Professional Contacts</StyledH4>
              <StyledTable>
                <StyledTr>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>Role</StyledTh>
                  <StyledTh>Contact</StyledTh>
                </StyledTr>
                <StyledTr>
                  <StyledTd>Rohit Krishnan</StyledTd>
                  <StyledTd>Internship Mentor</StyledTd>
                  <StyledTd>boardwalktech.com</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>Olivia Clachar</StyledTd>
                  <StyledTd>Boss</StyledTd>
                  <StyledTd>oclachar@bu.edu</StyledTd>
                </StyledTr>
              </StyledTable>

              <StyledH4>Personal Contacts</StyledH4>
              <StyledTable>
                <StyledTr>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>Relation</StyledTh>
                  <StyledTh>Contact</StyledTh>
                </StyledTr>
                <StyledTr>
                  <StyledTd>Prasad Joshi</StyledTd>
                  <StyledTd>Father</StyledTd>
                  <StyledTd>630-886-0830</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>Mithila Joshi</StyledTd>
                  <StyledTd>Mother</StyledTd>
                  <StyledTd>630-956-2625</StyledTd>
                </StyledTr>
              </StyledTable>

            </StyledTextContents>

          </StyledContents>
        </StyledMain>

      </StyledContainer>


      <Footer />
    </StyledWrapper>
  );
}