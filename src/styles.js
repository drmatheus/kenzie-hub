import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

:root{
  --color-gray-0: #F8F9FA;
  --color-gray-100:#868E96;
  --color-gray-200:#343B41;
  --color-gray-300:#212529;
  --color-gray-400:#121214;

  --color-brand: #FF577F;
  --color-brand-100:#FF427F;
  --color-brand-disable: #59323F;

  --radius-1: 4px;
}

[data-reach-dialog-content] {
    width: 396px;
    padding: 0;
    border-radius: var(--radius-1);
    background-color: var(--color-gray-200);
    justify-content: space-between;    
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: calc(100vw - 32px);
  }

[data-reach-dialog-content] .close-button{

  background-color: transparent;
  font-size: 30px;
  border: none;
  padding: 1rem;
  color: var(--color-gray-100);
}

[data-reach-dialog-content] h2{
  padding: 1rem;
  color: var(--color-gray-0);
  font-size: 16px;
  
}

button{
  cursor: pointer;
}
`;
