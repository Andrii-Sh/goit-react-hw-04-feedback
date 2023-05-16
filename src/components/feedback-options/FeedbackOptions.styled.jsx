import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  gap: 5px;
  margin: 0;
  margin-left: 8px;
  padding: 0;
`;

export const OptionsBtn = styled.button`
  /* width: 60px; */
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #a78484;

  font-weight: 600;
  text-transform: capitalize;
  line-height: 1.3;

  box-shadow: 0.5px 0.5px 0.5px gray;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 1px gray;
    scale: 1.03;
  }
`;
