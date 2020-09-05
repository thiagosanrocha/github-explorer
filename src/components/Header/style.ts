import styled, { keyframes } from 'styled-components';

const animationHeader = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  animation: 1s ${animationHeader} backwards;

  .logo img {
    width: 21.5rem;
    height: 3.2rem;
  }

  .button-back {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.6rem;
    color: #fbfbfb;
    font-weight: 700;

    span {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 328px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .button-back {
      margin-top: 1.6rem;
    }
  }
`;