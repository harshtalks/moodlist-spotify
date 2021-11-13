import React from "react";
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
          <span></span>
          <p>dList</p>
        </Logo>
      </NavBar>
    </Container>
  );
};

export default Nav;
