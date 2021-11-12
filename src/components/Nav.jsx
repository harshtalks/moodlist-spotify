import React from "react";
import spotify from "../images/spotify_g.png";
import { Container, NavBar, Logo } from "../styles/nav.styles";
import { useThemeContext } from "../context/useThemeContext";

const Nav = () => {
  const [theme, setTheme] = useThemeContext();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  return (
    <Container>
      <NavBar>
        <Logo onClick={toggleTheme}>
          <p>Mo</p>
          <img src={spotify} alt="sp-green" />
          <p>dList</p>
        </Logo>
      </NavBar>
    </Container>
  );
};

export default Nav;
