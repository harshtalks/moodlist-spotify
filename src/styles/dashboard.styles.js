import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    justify-content: start;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div``;

export const UserProfile = styled.div`
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  background: ${({ theme }) => theme.imageBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  border-radius: 1em;
  border-bottom: 5px solid #56ab2f; //fallback;
  border-bottom: 5px solid -webkit-linear-gradient(to right, #56ab2f, #a8e063); /* Chrome 10-25, Safari 5.1-6 */
  border-bottom: 5px solid linear-gradient(to right, #56ab2f, #a8e063); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  @media (max-width: 1024px) {
    justify-content: start;
    margin-top: 12vh;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }

  img {
    width: 10%;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.color};
    @media (max-width: 500px) {
      width: 25%;
    }
  }

  h2 {
    margin-top: 1em;
    font-size: 2rem;
    font-weight: 500;
  }

  h4 {
    margin-top: 0.5em;
    font-size: 1rem;
    font-weight: 400;
  }

  .email {
    background: #1db954;
    padding: 0.5em 1em;
    margin: 1em 0;
    color: white;
    border-radius: 5px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
      flex-direction: column;
    }
    button {
      padding: 8px 12px;
      margin: 10px 10px;
      outline: none;
      border-radius: 8px;
      border: none;

      &.active {
        opacity: 0.5;
      }
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
      @media (max-width: 500px) {
        width: 60vw;
        font-size: 1rem;
      }
      background: ${({ theme }) => theme.color};
      font-size: 1.2rem;
      cursor: pointer;
      color: ${({ theme }) => theme.imageBg};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.background};
      }
    }
  }

  .download {
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    background: #1db954;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    border-radius: 8px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 500px) {
      width: 60vw;
      font-size: 1.2rem;
    }
  }
`;

export const UserList = styled.div`
  margin: 0 auto;
  width: 1080px;
  min-height: 1920px;
  height: fit-content;
  background: #eeeee6;
  position: absolute;
  transform: translate(-50%, -50%);
  transform: scale(0.3);
  top: -20%;
  transform-origin: center;
  color: black;
  padding: 100px 90px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 1024px) {
    top: -10%;
  }

  @media (max-width: 500px) {
    margin-top: 32px;
    top: -15%;
  }

  h1 {
    font-family: "Fira Code", monospace;
    font-size: 65px;
    line-height: 1.4;
    margin-bottom: 100px;
  }

  .songs {
    border-top: 6px dotted black;
    border-bottom: 6px dotted black;
    margin-top: 40px;
    padding: 40px 0;

    .each {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      font-size: 32px;
      line-height: 1.4;

      &:last-child {
        margin-bottom: 20px;
      }
      .song {
        width: 80%;

        span {
          margin-right: 20px;

          &::after {
            content: ",";
          }

          &:last-child {
            &::after {
              display: none;
            }
          }
        }
      }
      p {
        font-family: "Fira Code", monospace;
      }
    }
  }

  .date {
    font-family: "Fira Code", monospace;
    margin-top: 40px;
    font-size: 32px;
    font-weight: 200;
  }

  .name {
    font-size: 70px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    opacity: 0.5;
  }
`;
