import React from 'react';
import './App.css';
import MultiPage from './components/MultiPage';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';
const App = () => {

  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4} secondary>
        <Paper component={Box} p={3}>
          <MultiPage />
        </Paper>
      </Container>
    </>
  )
}

export default App;