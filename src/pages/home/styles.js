import styled from "styled-components";

export const StyleBody = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-gray-400);
  padding-top: 78px;
  display: flex;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  color: var(--color-gray-0);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 780px;
  margin: 2rem auto;
  max-width: calc(100vw - 2rem);
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid var(--color-gray-300);
  height: fit-content;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    color: var(--color-gray-100);
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background-color: var(--color-gray-300);
  gap: 1rem;
  border-radius: var(--radius-1);
  margin-top: -48px;
`;
