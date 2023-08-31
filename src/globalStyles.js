import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

$mainBlueColor: #3E85F3;
$lightBlueColor: #E3F3FF;
$whiteColor: #FFFFFF;
$blackColor: #111111;
$hoverBlueColor: #2B78EF;
$errorRedColor: #E74A3B;
$correctGreenColor: #3CBC81;
$nameAvatarColor: #343434;
$linearPinkColor: #FFD2DD;
$greyColor: rgba(0,0,0,0.15);

$mainFont: 'Inter', Bold;
$buttonFont: 'Inter', Semi Bold;
$textFont: 'Inter', Medium;
$formFont: 'Inter', Regular;

$headerBackground: #3E85F3;
$sectionBackground: #E3F3FF;

h1 {
    color: #3E85F3;
    background: #E3F3FF;
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