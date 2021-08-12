import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  display: flex;
  flex-direction: column;
`;
export const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const Description = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
`;
export const ChannelThumbnail = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  border-radius: 50%;
  object-fit: cover;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  max-height: 5rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1rem;
  overflow: hidden;
`;
export const Info = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.subTextColor};
`;
