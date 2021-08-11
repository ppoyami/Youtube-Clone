import styled, { css } from 'styled-components';

export const Layout = styled.div`
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 0;
`;
export const ChannelTitle = styled.h3`
  font-size: 1.8rem;
`;
export const Desc = styled.pre`
  position: relative;
  font-size: 1.4rem;
  margin-top: 5rem;
  width: 30%;

  ${({ more }) =>
    !more &&
    css`
      height: 10rem;
      overflow: hidden;
    `}
`;

export const More = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.subTextColor};
  cursor: pointer;
`;
