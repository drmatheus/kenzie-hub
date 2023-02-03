import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--color-gray-200);
  padding-left: 16px;
  border: none;
  border-radius: var(--radius-1);
  font-size: 16px;
  color: var(--color-gray-0);
  letter-spacing: 0.5px;

  ::placeholder {
    font-size: 16px;
    color: var(--color-gray-100);
  }
`;
