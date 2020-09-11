import styled, { keyframes } from 'styled-components';

const animationIntro = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PageContainer = styled.div`
  main {
    margin: 8rem 0 1.6rem 0;
  }

  .repoNotFound {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 34px - 4rem);
  }
`;

export const RepoInfo = styled.header`
  display: flex;
  align-items: center;
  animation: 1s ${animationIntro} 0.4s backwards;

  img {
    height: 12rem;
    width: 12rem;
    border: 50%;
    border-radius: 50%;
  }

  div {
    margin-left: 3.2rem;
  }
`;

export const TitleRepo = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
`;

export const DescriptionRepo = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #737380;
`;

export const Issues = styled.div`
  margin-top: 8rem;

  a {
    display: block;
    text-decoration: none;

    & + a {
      margin-top: 1.6rem;
    }
  }
`;

export const AccountantsContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  animation: 1s ${animationIntro} 0.4s backwards;

  div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-left: 8rem;
    }

    span {
      font-size: 2rem;
      color: #6C6C80;
    }
  }
`; 

export const Count = styled.div`
  .countup {
    font-size: 3.6rem;
    font-weight: 700;
    color: #FFF;
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
  transition: 0.5s;
  animation: 1s ${animationIntro} 0.6s backwards;

  &:hover {
    transform: translateX(2.5rem);
  }

  & + section {
    margin-top: 1.6rem;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    text-align: center;
  }
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
