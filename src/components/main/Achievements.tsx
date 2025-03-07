import { styled } from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import { StyledWrapper, StyledContainer, StyledMain, StyledH3, StyledContents, StyledTextContents, StyledP } from "../ui-components/StyledComponents";


const StyledTable = styled.table`
  border: 1px solid white;
  text-align: center;
  table-layout: fixed;
  width: 100%; 
  margin: auto;

  @media screen and (max-width: 750px) {
    margin: -0.5% -12%;
    margin-bottom: 5%;
  }

`;

const StyledTr = styled.tr`
`;


const StyledTd = styled.td`
  padding: 15px;
  width: 33.33%;
  word-wrap: break-word;
`;


export default function Achievements() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <Nav />
        <StyledMain>
          <StyledH3>Achievements</StyledH3>

          <StyledContents>
            <StyledTextContents>

              <StyledTable>
                <StyledTr>
                  <StyledTd>
                    <StyledP>AP Scholar with Honors</StyledP>
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <StyledP>AP Scholar with Distinction</StyledP>
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <StyledP>Dean's List at Boston University</StyledP>
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <StyledP>Dean's Circle at Boston University</StyledP>
                  </StyledTd>
                </StyledTr>
              </StyledTable>
              <StyledP>
                These are my achievements from high school at Naperville Central High School and from university at Boston
                University.
              </StyledP>



            </StyledTextContents>

          </StyledContents>
        </StyledMain>

      </StyledContainer>
      <Footer />
    </StyledWrapper>

  );
}