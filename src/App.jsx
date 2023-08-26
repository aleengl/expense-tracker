import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*, *::after, *::before {
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}
`;

const Header = styled.h1`
  color: #f00;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>This is just a test if styled components is working</Header>
    </>
  );
};

export default App;
