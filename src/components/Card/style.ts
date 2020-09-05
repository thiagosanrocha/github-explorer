import styled, { keyframes } from 'styled-components';

const animationCard = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: #202024;
  padding: 1.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.5s;
  animation: 1s ${animationCard} 0.6s backwards;

  &:hover {
    transform: translateX(2.5rem);
  }

  & + section {
    margin-top: 1.6rem;
  }

  .btns {
    display: flex;
    align-items: center;

    .remove {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.5rem 0 1rem;
    }
  }

  @media (max-width: 420px) {
    flex-direction: column;
    text-align: center;

    .btns {
      width: 100%;

      .remove {
        flex: 1;
        margin: 0 1rem 0 0;
        background: #DC143C;
        border-radius: 0.5rem;
        padding: 0.5rem;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-right: 2.4rem;
`;

export const Info = styled.div`
  flex: 1;
  padding-right: 1rem;

  p {
    font-size: 1.8rem;
    color: #a8a8b3;
  }

  @media (max-width: 420px) {
    padding-right: 0;
    margin: 1.6rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: #fbfbfb;
`;
