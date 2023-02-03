import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-gray-300);
  background-color: var(--color-gray-400);

  div {
    width: 780px;
    max-width: calc(100vw - 2rem);
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    color: var(--color-gray-0);
    font-weight: 600;
    padding: 12px 16px;
    background-color: var(--color-gray-300);
    border-radius: var(--radius-1);
    text-decoration: none;
    font-size: 12px;
    border: none;
  }
`;
