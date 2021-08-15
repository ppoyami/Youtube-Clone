import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 8rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.navColor};
  padding-top: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  ${({ isDetailPage }) =>
    isDetailPage &&
    css`
      height: 7rem;
      overflow: hidden;
      border-bottom: 1px solid ${({ theme }) => theme.colors.subTextColor};
    `}

  ${({ theme }) => theme.media.tablet`
    height: 7rem;
    overflow: hidden;
    border-bottom: 1px solid ${({ theme }) => theme.colors.subTextColor};
  `}

  // Q: !important가 왜 필요할까?
  ${({ open }) =>
    open &&
    css`
      width: 20rem !important;
      height: 100vh !important;
      overflow: visible !important;

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
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.subTextColor};

  & > span {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  &:first-child {
    font-size: 3rem;
    margin-bottom: 8rem;
    color: ${({ theme }) => theme.colors.textColor};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
  }

  // BUG: 아래 css 먹히지 않음
  ${({ open }) =>
    open &&
    css`
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 5rem;
      font-size: 2.5rem;
      & > span {
        font-size: 1.5rem;
        margin-top: 0;
        margin-left: 1rem;
      }
    `}
`;
