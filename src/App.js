import * as React from 'react';
import './index.css';
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import { Container } from './components/form/Styled';
import { Page } from './components/form/Styled';


function App() {
  return (
    <>
    <Nav />
      <Page>
        <Container>
          <Form title="Sign Up" name="Please fill in this form to create an account." />
        </Container>
      </Page>  
    </>
  );
}

export default App;
