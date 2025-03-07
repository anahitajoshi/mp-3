import { styled } from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import { StyledWrapper, StyledContainer, StyledMain, StyledH3, StyledContents, StyledTextContents } from "../ui-components/StyledComponents";


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