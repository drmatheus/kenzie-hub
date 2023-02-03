import styled from "styled-components";

export const StyledForm = styled.form`
  min-width: 300px;
  width: 396px;
  max-width: calc(100vw - 32px);
  background-color: var(--color-gray-300);
  padding: 42px 22px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-radius: var(--radius-1);
  color: var(--color-gray-0);
  margin: 0 auto;

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-gray-100);
  }

  label {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
  }

  select {
    width: 100%;
    height: 48px;
    background-color: var(--color-gray-200);
    padding-left: 16px;
    border: none;
    border-radius: var(--radius-1);
    font-size: 16px;
    letter-spacing: 0.5px;
    color: var(--color-gray-0);
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  div :first-child {
    width: 59%;
  }

  section {
    max-width: calc(100vw - 32px);
    width: 100%;
    background-color: var(--color-gray-300);
    display: flex;
    flex-direction: column;
    gap: 28px;
    border-radius: var(--radius-1);
    color: var(--color-gray-0);
    margin: 0 auto;
  }

  div :last-child {
    width: 39%;
    background-color: var(--color-gray-200);
  }

  button {
    width: 100%;
  }

  @media (min-width: 600px) {
    & {
      align-items: center;
      width: 900px;
      max-width: calc(100vw - 64px);
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    section {
      padding: 0;
      width: 45%;
    }

    section:first-child {
      width: 100%;
      height: fit-content;
      margin: 0;
      padding: 0;
    }

    section:last-child {
      width: 100%;
      padding: 0 17px;
    }

    label {
      max-width: 100%;
      margin: 0 auto;
      width: 390px;
    }
    input {
      max-width: 100%;
    }
  }
`;
