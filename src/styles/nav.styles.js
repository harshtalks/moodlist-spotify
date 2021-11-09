import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 8vh;
  width: 100%;
  border-top: 5px solid #56ab2f; //fallback;
  border-top: 5px solid -webkit-linear-gradient(to right, #56ab2f, #a8e063); /* Chrome 10-25, Safari 5.1-6 */
  border-top: 5px solid linear-gradient(to right, #56ab2f, #a8e063); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ ;
`;

export const NavBar = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
`;

export const Logo = styled.div`
  cursor: pointer;
  opacity: 0.7;

  &:hover,
  &:active {
    opacity: 1;
  }
  p {
    display: inline;
    font-size: 1.5rem;
    font-weight: bold;
    //disbling text selection
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  img {
    width: 1.5rem;
    margin: 0 0.2em;
  }
`;

export const Menu = styled.div`
  opacity: 0.7;
  &:hover,
  &:active {
    opacity: 1;
  }
  cursor: pointer;
  span {
    display: block;
    width: 2rem;
    height: 3px;
    margin-bottom: 0.4em;
    background: ${({ theme }) => theme.color};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
