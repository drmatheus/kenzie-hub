import styled from "styled-components";
import trash from "../../assets/img/trash.svg";

export const StyledLi = styled.li`
  height: 3rem;
  width: 100%;
  background-color: var(--color-gray-400);
  border-radius: var(--radius-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    font-size: 16px;
  }

  h4 {
    color: var(--color-gray-100);
    font-weight: 400;
    font-size: 13px;
  }

  button {
    width: 32px;
    height: 32px;
    background-color: transparent;
    background-image: url(${trash});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: var(--radius-1);
    opacity: 0.4;
    cursor: pointer;
  }

  button:hover {
    opacity: 1.4;
  }
`;
