import { styled } from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import { StyledWrapper, StyledContainer, StyledMain, StyledH3, StyledContents, StyledTextContents, StyledP } from "../ui-components/StyledComponents";

const StyledImages = styled.div`
  max-width: 40%;
  margin: 1vh 1vw;

  @media screen and (max-width: 750px) {
    width: 40%;
    margin: 1vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;


const StyledProfilePic = styled.img`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 50px;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 50px;
  }


`;

export default function Resume() {
  return (
    <StyledWrapper>

      <Header />
      <StyledContainer>
        <Nav />

        <StyledMain>

          <StyledH3>Homepage</StyledH3>

          <StyledContents>

            <StyledImages>
              <StyledProfilePic src="/profile.jpg" alt="Profile picture of Anahita Joshi" />
            </StyledImages>

            <StyledTextContents>
              <StyledP>
                Hi, my name is Anahita Joshi. I am currently a senior at Boston University graduating in May 2025.
                I'm majoring in Computer Science with a minor in Business Administration and Finance. In my free time, I
                love to take dance classes and read. Feel free to reach out!
                This is my online resume where you can see my education history, employment, and more.
              </StyledP>

            </StyledTextContents>

          </StyledContents>
        </StyledMain>

      </StyledContainer>

      <Footer />
    </StyledWrapper>
  );
}