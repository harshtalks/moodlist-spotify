import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <span className="loader">
        <span className="inner-spinner"></span>
      </span>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.color};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader::after {
    content: "";
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.color};
    animation: rotate 1.3s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
