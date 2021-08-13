import styled from 'styled-components';

export const Layout = styled.div`
  padding-left: 8rem;
  ${({ theme }) => theme.media.tablet`
      padding-left: 0;
  `}
`;
