import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 40%;
  min-width: 20rem;

  ${({ theme }) => theme.media.tablet`
    width: 60% 
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 3px;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5rem;
  background-color: ${({ theme }) => theme.colors.subTextColor};
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
`;
