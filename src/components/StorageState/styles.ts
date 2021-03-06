import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 32rem;
  display: flex;
  flex-direction: column;
  
  background: var(--dark-blue);
  margin: 1rem;
  padding: 2.5rem 4rem 6rem;
  border-radius: 0.9rem;

  @media only screen and (min-width: 1440px) {
    width: 51rem;
    height: 15rem;
    top: 2.5rem;
    margin-left: 3rem;

    padding: 4rem ;
  }
`;

export const UsedStorage = styled.div`
  font-size: 1.4rem;
  color: var(--grayish-blue);
  font-weight: bold;

  @media only screen and (min-width: 1440px) {
      font-size: 1.6rem;
  }
`;

export const StateContainer = styled.div`
  width: 100%;
  height: 1.8rem;
  border-radius: 0.9rem;
  background: var(--very-dark-blue);

  margin-top: 1.2rem;
`;

export const State = styled.div`
  width: 1.2rem;
  height: 1.4rem;
  border-radius: 0.9rem;
  background: var(--primary);

  margin-top: 0.9%;
  position: relative;
  animation-name: states;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-duration: 1.9s;
  animation-timing-function: ease-out;

  @media only screen and (min-width: 1440px) {
    margin-top: 0.3%;
  }

  @keyframes states {
    0% {
      width: 1.2rem;
    }

    100% {
      width: 75%;
    }
  }
`;

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--pale-blue);
  top: .2rem;

  position: relative;
  animation-name: statesDot;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-duration: 1.9s;
  animation-timing-function: ease-out;

  @keyframes statesDot {
    0% {
        left: 0;
    }

    100% {
        left: 16.8rem;
    }
  }

  @media only screen and (min-width: 1440px) {
    @keyframes statesDot {
      0% {
          left: 0;
      }

      100% {
          left: 31rem;
      }
   }
  }
`;

export const Storage = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;

  > span {
    font-size: 1.4rem;
    font-weight: bold;
    
    @media only screen and (min-width: 1440px) {
      font-size: 1.5rem;
    }
  }
`;

export const StorageLeft = styled.div`
  position: absolute;
  top: 12rem;
  left: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 18rem;
  height: 7rem;
  background: var(--pale-blue);
  border-radius: 0.9rem;
  
  > strong {
    font-size: 3.4rem;
    color: var(--very-dark-blue);
  }

  > span {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: gray;
    font-weight: bold;
    margin-left: 1rem;
    margin-right: 2rem;
  }

  @media only screen and (min-width: 1440px) {
    width: 16rem;
    height: 6rem;
    top: -4.4rem;
    left: 30.9rem;
  }
`;

export const Arrow = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: flex;
    position: relative;
    top: -11.6rem;
    right: 0.1rem;

    border-top: 2rem solid transparent;
    border-left: 2rem solid transparent;
    border-right: 2rem solid var(--pale-blue);
    border-bottom: 2rem solid transparent;
    z-index: 1;
  }
`;