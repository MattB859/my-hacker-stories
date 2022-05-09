import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import { Container } from './components/styled-components/Styled';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';



function App() {
  return (
    <>
      <Nav />
      <Home />
      <Container>
        <Form title="Sign Up" name="Please fill in this form to create an account." />
      </Container>
    </>
  );
}

export default App;
