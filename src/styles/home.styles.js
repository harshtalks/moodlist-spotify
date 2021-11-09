import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-top: 60px;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  background: ${({ theme }) => theme.imageBg};
  width: 40vw;
  height: 80vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1em;

  @media (max-width: 768px) {
    width: 35vw;
    height: 60vh;
  }

  @media (max-width: 500px) {
    margin-top: 40px;
    width: 85vw;
    height: 40vh;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const SubHead = styled.p`
  margin-bottom: 1em;
  font-size: 2.25rem;
  line-height: 1.3;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
export const Button = styled.button`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.color};
  font-size: 1.3rem;
  padding: 0.6em 1em;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  img {
    width: 1em;
    margin-left: 0.4em;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    transform: scale(1.01);
  }
`;
export const Headline = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 0.3em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  span {
    color: #1db954;
    font-weight: bold;
  }
`;
