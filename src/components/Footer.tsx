import { styled } from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;

  background-color: black;
  color: white;
  justify-content: space-evenly;
  padding: 2vh 2vw;

`;

const StyledP = styled.p`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;

  @media screen and (max-width: 750px) {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledP>
        All Rights Reserved by Anahita Joshi <StyledLink to={`/`}>Credits</StyledLink> &copy;
      </StyledP>
    </StyledFooter>
  );
}
