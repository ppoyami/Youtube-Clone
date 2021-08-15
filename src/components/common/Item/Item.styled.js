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
  width: 4rem;
  height: 4rem;
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
  font-size: 1.7rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  height: 4rem; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;
export const Info = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.subTextColor};
`;
