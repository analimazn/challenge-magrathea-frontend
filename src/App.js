import React from 'react'
import './styles/global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Container>
        <Header/>
        <Routes/>
      </Container>
    </Router>
  );
}

export default App
