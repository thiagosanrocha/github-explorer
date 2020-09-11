import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
  animationIntro: boolean;
}

const animationIntro = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const animationLoading = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  main {
    max-width: 71.4rem;
    padding-bottom: 1.6rem;
  }

  h1 {
    font-size: 4.8rem;
    max-width: 43.3rem;
    margin: 10rem 0 4rem 0;
    animation: ${animationIntro} 5s 0.4s backwards;
  }
`;

export const animationErrorForm = keyframes`
  25% {
    transform: translateX(5rem);
  } 75% {
    transform: translateX(-5rem);
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;
  
  ${props => props.animationIntro && css`
    animation: ${animationIntro} 1s 0.4s backwards;
  `}

  ${props => props.hasError && css`
    animation: 0.3s ${animationErrorForm} ease;
  `}

  input {
    flex: 1;
    height: 7.08rem;
    border-radius: 0.5rem 0 0 0.5rem;
    color: #a8a8b3;
    font-size: 2rem;
    padding: 0 3rem;
    background: #202024;
    border: ${
      props => props.hasError 
      ? '0.2rem solid #c53030' 
      : 'none'
    };
    border-right: 0;

    &:focus {
      border-bottom: ${
        props => props.hasError 
        ? '0.2rem solid #c53030' 
        : '0.2rem solid #04d361'
      };
    }

    &:focus::placeholder {
      transform: translate(0, -22px);
      color: ${
        props => props.hasError 
        ? '#a8a8b3' 
        : '#04d361'
      };
      font-size: 1.3rem;
      transition: 0.5s ease;
    }

    &:focus::-moz-placeholder {
      color: ${
        props => props.hasError 
        ? '#a8a8b3' 
        : '#04d361'
      };
      font-size: 2rem;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 21rem;
    height: 7.08rem;
    border: none;
    background: #04d361;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
    border-radius: 0 0.5rem 0.5rem 0;
    transition: background 0.5s ease;

    &:hover {
      background: ${shade(0.3, '#04d361')};
    }

    svg {
      animation: 1s ${animationLoading} linear infinite;
    }
  }

  @media (max-width: 456px) {
    flex-direction: column;
    margin-bottom: 6rem;

    input {
      width: 100%;
      border-radius: 0.5rem;
      padding: 2.3rem 3rem;
      border: ${
        props => props.hasError 
        ? '0.2rem solid #c53030' 
        : 'none'
      };
    }

    button {
      width: 100%;
      border-radius: 0.5rem;
      margin-top: 1.6rem;
    }
  }
`;

export const FormError = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 7.8rem;
  left: 0;
  color: #c53030;
  font-size: 1.2rem;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 456px) {
    top: -2.5rem;
  }

  @media (max-width: 358px) {
    top: -3.5rem;
  }
`;


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
  transition: 0.5s;
  animation: 1s ${animationCard} 0.6s backwards;

  &:hover {
    transform: translateX(2.5rem);
  }

  & + section {
    margin-top: 1.6rem;
  }

  a {
    display: flex;
    align-items: center;
    flex: 1;
    text-decoration: none;
  }

  .btns {
    display: flex;
    align-items: center;

    .remove {
      margin-right: 0.5rem;
      cursor: pointer;
      color: #FFF;
      transition: 0.5s color ease;
 
      &:hover {
        color: #DC143C;
      }
    }
  }

  @media (max-width: 420px) {
    &, a {
      flex-direction: column;
      text-align: center;
    }

    .btns {
      width: 100%;

      .remove {
        flex: 1;
        margin-right: 1rem;
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
  padding-right: 1.6rem;

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
