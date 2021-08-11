import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.navColor};
  border-radius: 5px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;
export const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  height: 3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const SubTitle = styled.h5`
  font-size: 1.4rem;
  height: 4rem;
`;
export const Description = styled.p``;
