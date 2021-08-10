import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 7rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.navColor};
  padding-top: 2rem;

  ${({ theme }) => theme.align.flexHorizontal}
  flex-direction: column;
  justify-content: flex-start;

  ${({ open }) =>
    open &&
    css`
      width: 20rem;
      &::after {
        position: absolute;
        top: 0;
        left: 20rem;
        display: block;
        content: '';
        width: calc(100vw - 20rem);
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
      }
      z-index: 100;
    `}
  transition: width .3s;
`;

export const Icon = styled.i`
  ${({ theme }) => theme.align.flexCenter}

  flex-direction: column;
  margin-bottom: 5rem;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.subTextColor};

  & > span {
    text-align: center;
    font-size: 1.8rem;
    margin-top: 1rem;
  }

  &:first-child {
    font-size: 3rem;
    margin-bottom: 8rem;
    color: ${({ theme }) => theme.colors.textColor};
  }

  ${({ open }) =>
    open &&
    css`
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 5rem;
      & > span {
        margin-top: 0;
        margin-left: 1rem;
      }
    `}
`;
