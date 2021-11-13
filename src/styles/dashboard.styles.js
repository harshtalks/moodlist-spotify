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
  position: static;
  z-index: 1000;
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
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
    margin-top: 0.7em;
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

  .switch {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .activeClass {
      background: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.background};
    }
    @media (max-width: 500px) {
      flex-direction: column;
    }
    button {
      outline: none;
      background: none;
      border: 2px solid ${({ theme }) => theme.color};
      padding: 0.5em 0;
      width: 250px;
      margin-right: 1em;
      cursor: pointer;
      color: ${({ theme }) => theme.color};
      transition: all 0.1s ease;

      &:hover,
      &:active {
        background: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.background};
      }

      @media (max-width: 500px) {
        margin-right: 0;
        margin-bottom: 0.5em;
        font-size: 1em;
      }

      &:last-child {
        margin-right: 0;
      }
    }
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
      margin: 5px 10px;
      outline: none;
      border: none;
      opacity: 0.9;
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};

      &:hover,
      &:active {
        opacity: 1;
      }

      &.active {
        background-color: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.background};
      }
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
      @media (max-width: 500px) {
        width: 60vw;
        font-size: 1rem;
        margin-bottom: 0.2rm;
      }

      font-size: 1.2rem;
      cursor: pointer;
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
    margin-top: 5px;
    transition: all 0.25s ease;
    &:hover,
    &:active {
      transform: scale(1.01);
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 500px) {
      width: 60vw;
      font-size: 1.2rem;
    }
  }
  .disable {
    opacity: 0.5;
  }
`;

export const UserList = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-height: 2200px;
  height: fit-content;
  background: white;
  position: absolute;
  transform: translate(-50%, -50%);
  transform: scale(0.3);
  overflow: hidden;
  .paper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  padding: 40px 70px;
  top: -40%;
  transform-origin: center;
  color: black;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 1024px) {
    top: -20%;
  }

  @media (max-width: 768px) {
    top: -30%;
  }

  @media (max-width: 500px) {
    margin-top: 32px;
    top: -30%;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 1;
    padding: 50px 0;
    border-bottom: 4px dotted black;
    h1 {
      opacity: 0.6;
      font-size: 80px;
      text-transform: uppercase;
      font-weight: bold;
    }

    p {
      opacity: 0.6;
      font-size: 32px;
      text-transform: uppercase;
      font-weight: bold;
      margin: 10px 0;
    }

    h3 {
      opacity: 0.6;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 20px;
    }

    @media (max-width: 500px) {
      padding-top: 0;

      h1 {
        font-size: 80px;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 80px;
        margin-top: 0;
      }
    }
  }

  .buyer {
    opacity: 0.7;
    margin: 20px 0;
    border-bottom: 4px dotted black;
    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      &:last-of-type {
        margin-bottom: 20px;
      }

      p {
        font-size: 40px;
        font-family: "Fira Code", monospace;
      }
    }
  }

  .total {
    margin: 20px 0;
    border-bottom: 4px dotted black;

    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      &:last-of-type {
        margin-bottom: 20px;
      }

      p {
        font-size: 40px;
        font-family: "Fira Code", monospace;
      }
    }
  }

  .finalSum {
    margin: 20px 0;
    border-bottom: 4px dotted black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;

    p {
      font-size: 40px;
      font-family: "Fira Code", monospace;
    }
  }

  .thanks {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      opacity: 0.7;
      font-size: 60px;
      font-weight: bold;
      text-transform: uppercase;
      margin: 10px 0;
    }
    img {
      opacity: 0.4;
      margin: 0 auto;
      width: 80%;
      opacity: 0.7;
    }
  }

  .songs {
    margin-top: 40px;
    padding: 40px 0;
    border-bottom: 4px dotted black;

    .each {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
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
    font-size: 50px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    opacity: 0.4;
    font-weight: 200;
  }

  .heading {
    font-family: "Fira Code", monospace;
    font-size: 32px;
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.7;
    text-transform: uppercase;
  }
`;

export const RecommendList = styled.div`
  background: #f2e6da;
  margin: 0 auto;
  width: 1080px;
  min-height: 1920px;
  height: fit-content;
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
    top: -12%;
  }

  padding: 70px;
  .content {
    border: 1px solid black;

    .title {
      border-bottom: 1px solid black;
      h1 {
        font-size: 50px;
        font-family: Poppins;
        padding: 50px 20px;
        font-weight: 200;
        letter-spacing: 0.1em;
      }
    }

    .footer {
      display: flex;
      height: 200px;
      justify-content: space-between;
      .leftContainer {
        width: 20%;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 100%;
        }
      }

      .rightContainer {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-left: 1px solid black;

        div {
          border-bottom: 1px solid black;
          height: 50%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;

          &:last-of-type {
            border: none;
          }

          h2 {
            font-size: 32px;
            font-family: "Fira Code", monospace;
            text-transform: uppercase;
            margin: 0 20px;
            font-weight: 200;
          }
        }
      }
    }

    .song {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
      border-bottom: 1px solid black;

      h2 {
        padding-left: 20px;
        font-size: 28px;
        font-family: "Fira Code", monospace;
        width: 80%;
        line-height: 1.4;

        span {
          &::after {
            content: ", ";
          }

          &:last-of-type {
            margin-right: 0;
            &::after {
              display: none;
            }
          }
        }
      }

      .box {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        display: block;
        margin-right: 20px;
      }
    }
  }
`;
