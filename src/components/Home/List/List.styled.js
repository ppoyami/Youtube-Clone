import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  align-items: stretch;
  justify-items: stretch;
  gap: 2rem;
  padding: 2rem;
`;
