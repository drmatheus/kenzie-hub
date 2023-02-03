import styled from "styled-components";

export const StyledRegister = styled.div`
  padding: 32px 0;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 32px;
  color: var(--color-gray-0);

  &:last-child {
    height: 100vh;
  }

  div {
    width: 396px;
    max-width: calc(100vw - 32px);
    display: flex;
    justify-content: space-between;
  }

  a {
    height: 40px;
    width: fit-content;
    text-decoration: none;
    background-color: var(--color-gray-300);
    color: var(--color-gray-0);
    padding: 13px 16px;
    border-radius: var(--radius-1);
    font-size: 12px;
  }

  label {
    position: relative;
    padding-bottom: 18px;
  }

  label + span {
    color: var(--color-brand-100);
    font-size: 12px;
    font-weight: 400;
    margin-top: -36px;
    text-align: left;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    div {
      width: 932px;
      max-width: calc(100vw - 32px);
      display: flex;
      justify-content: space-between;
      padding: 6px;
    }
  }
`;
