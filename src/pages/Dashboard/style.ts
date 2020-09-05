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

export const Container = styled.div`
  main {
    max-width: 71.4rem;
    padding-bottom: 1.6rem;
  }

  h1 {
    font-size: 4.8rem;
    max-width: 43.3rem;
    margin: 10rem 0 4rem 0;
    animation: ${animationIntro} 1s 0.2s backwards;
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
      background: ${shade(0.2, '#04d361')};
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
      margin-top: 2.1rem;
    }
  }
`;

export const FormError = styled.span`
  position: absolute;
  top: 7.8rem;
  left: 0;
  color: #c53030;
  font-size: 1.1rem;
`;
