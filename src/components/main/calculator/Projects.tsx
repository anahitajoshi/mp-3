import Header from "../../Header";
import Nav from "../../Nav";
import Footer from "../../Footer";
import Calculator from "./Calculator";
import { StyledWrapper, StyledContainer } from "../../ui-components/StyledComponents";


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