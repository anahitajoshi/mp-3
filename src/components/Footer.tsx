import { styled } from "styled-components";

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

export default function Footer() {
  return (
    <StyledFooter>
      <StyledP>
        All Rights Reserved by Anahita Joshi &copy;
      </StyledP>
    </StyledFooter>
  );
}
