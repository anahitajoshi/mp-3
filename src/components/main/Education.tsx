import { styled } from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import { StyledWrapper, StyledContainer, StyledMain, StyledH3, StyledContents, StyledTextContents, StyledP } from "../ui-components/StyledComponents";

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