import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

:root {
    --main-blue-color: #3E85F3;
    --light-blue-color: #E3F3FF;
    --white-color: #FFFFFF;
    --black-color: #111111;
    --hover-blue-color: #2B78EF;
    --error-red-color: #E74A3B;
    --correct-green-color: #3CBC81;
    --name-avatar-color: #343434;
    --linear-pink-color: #FFD2DD;
    --grey-color: rgba(0,0,0,0.15);

    --main-font: 'Inter', Bold;
    --button-font: 'Inter', Semi Bold;
    --text-font: 'Inter', Medium;
    --form-font: 'Inter', Regular;

    --header-background: #3E85F3;
    --section-background: #E3F3FF;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

h1 {
    color: #3E85F3;
}

h2 {
    color: #3E85F3;
}

p {
    color: #111111;
}

h1, h2, p {
    margin: 0;
    padding: 0;
}
`;
 
export default GlobalStyle;