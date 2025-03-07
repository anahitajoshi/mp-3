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
  font-size: calc(16px + 1vw);
  text-align: center;

  @media screen and (max-width: 750px) {
    text-decoration: none;
    font-size: calc(2px + 1vw);
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
