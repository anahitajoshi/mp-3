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

export default function Skills() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <Nav />

        <StyledMain>

          <StyledH3>Skills</StyledH3>

          <StyledContents>


            <StyledTextContents>
              <StyledH4>Skills</StyledH4>
              <StyledP><strong>Programming Languages:</strong> Python, Java, SQL, OCaml, Assembly, ShellScript</StyledP>
              <StyledP><strong>Web Development:</strong> ReactJS, HTML, CSS</StyledP>
              <StyledP><strong>Software Tools:</strong> Git, Microsoft Excel, PowerPoint, Word, OnBase</StyledP>
              <StyledP><strong>Technical Expertise:</strong> SLDC, OOP, Functional Programming, Algorithm & Graph Design,
                Database Management</StyledP>

              <StyledH4>Project Skills</StyledH4>
              <StyledP><strong>Ripple Search Project:</strong> Java-based search engine creating SQL queries utilizing Natural
                Language Processing (NLP)</StyledP>

            </StyledTextContents>

          </StyledContents>
        </StyledMain>

      </StyledContainer>


      <Footer />
    </StyledWrapper>
  );
}