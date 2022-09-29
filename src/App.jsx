import React from 'react';
import styled from 'styled-components';

import CheckoutPage from './pages/CheckoutPage';

const AppWrapper = styled.main`
  padding: 5rem 2rem 2rem 2rem;
`;

function App() {
  return (
    <AppWrapper>
      <CheckoutPage />
    </AppWrapper>
  )
}

export default App