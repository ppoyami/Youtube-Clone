import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 7rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 7rem;
  background-color: ${({ theme }) => theme.colors.navColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.subTextColor};
`;

export const Logo = styled.i`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: 0 2rem;
  cursor: pointer;
  ${({ theme }) => theme.align.flexCenter}
`;

export const Icon = styled(Logo)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Icons = styled.div`
  display: flex;
  margin-left: auto;
  padding: 1rem;
  & > i {
    margin-left: 2vw;
    margin-right: 0;
  }
  & > i:last-child {
    color: violet;
    margin-left: 4vw;
    font-size: 3rem;
  }
`;
