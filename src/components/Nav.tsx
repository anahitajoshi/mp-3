import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
  width: 30%;
  height: auto;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;

  background-color: rgb(170, 233, 247);

  list-style: none;
  justify-content: space-evenly;
  margin-right: 0;
  font-size: calc(2px + 2vw);
  text-align: center;

  padding-left: 0;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: row;
    background-color: rgb(170, 233, 247);

    list-style: none;
    padding-left: 0;
  }
`;

const StyledLi = styled.li`
  font-size: calc(3px + 3vw);
  width: 90%;
  background-color: white;

  border-radius: 50px;
  padding: 5vh 0;
  margin: 2vh auto;
  word-wrap: break-word;

  @media screen and (max-width: 750px) {
    font-size: calc(2px + 1.5vw);
    background-color: white;
    padding: 1% .5%;
    margin: 1% .5%;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: calc(16px + 1vw);
  text-align: center;

  @media screen and (max-width: 750px) {
    text-decoration: none;
    font-size: calc(2px + 1vw);
  }
`;


export default function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi><StyledLink to={"/"}>Resume</StyledLink></StyledLi>
        <StyledLi><StyledLink to={"/education"}>Education</StyledLink></StyledLi>
        <StyledLi><StyledLink to={"/experience"}>Experience</StyledLink></StyledLi>
        <StyledLi><StyledLink to={"/achievements"}>Achievements</StyledLink></StyledLi>
        <StyledLi><StyledLink to={"/references"}>References</StyledLink></StyledLi>
        <StyledLi><StyledLink to={"/skills"}>Skills</StyledLink></StyledLi>
        <StyledLi><StyledLink to={"/projects"}>Projects</StyledLink></StyledLi>
      </StyledUl>
    </StyledNav>
  );
}