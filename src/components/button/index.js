import styled from "styled-components";
import plus from "../../assets/img/plus.svg";

export const StyledButton = styled.button`
  background-color: var(--color-brand);
  color: var(--color-gray-0);
  font-weight: 500;
  height: 48px;
  border: none;
  border-radius: var(--radius-1);
  font-size: 16px;

  &:hover {
    background-color: var(--color-brand-100);
  }

  &:disabled {
    background-color: var(--color-brand-disable);
  }
`;

export const StyledButtonAdd = styled.button`
  background-color: var(--color-brand);
  color: var(--color-gray-0);
  font-weight: 500;
  height: 48px;
  border: none;
  border-radius: var(--radius-1);
  font-size: 16px;

  &:hover {
    background-color: var(--color-brand-100);
  }

  &:disabled {
    background-color: var(--color-brand-disable);
  }
`;

export const StyledButtonEdit = styled.button`
  background-color: var(--color-brand);
  color: var(--color-gray-0);
  font-weight: 500;
  height: 48px;
  border: none;
  border-radius: var(--radius-1);
  font-size: 16px;

  &:hover {
    background-color: var(--color-brand-100);
  }

  &:disabled {
    background-color: var(--color-brand-disable);
  }
`;

export const StyledButtonPlus = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--color-gray-200);
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 12px;
  padding: 8px;
  border: none;
  border-radius: var(--radius-1);
  opacity: 0.4;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
