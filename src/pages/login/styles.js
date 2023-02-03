import styled from "styled-components";

export const StyledLogin = styled.div`
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

  a {
    width: 100%;
    height: 48px;
    text-decoration: none;
    background-color: var(--color-gray-100);
    color: var(--color-gray-0);
    padding-top: 14px;
    border-radius: var(--radius-1);
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    max-width: 390px;
    text-align: left;
  }

  form {
    flex-direction: column;
  }

  @media (min-width: 600px) {
    input {
      width: 390px;
    }
    button {
      max-width: 390px;
    }
    a {
      max-width: 390px;
    }
    form {
      align-items: center;
    }
  }
`;
