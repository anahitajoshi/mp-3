import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import { StyledWrapper, StyledContainer, StyledMain, StyledH3, StyledContents, StyledTextContents, StyledP, StyledH4 } from "../ui-components/StyledComponents";


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