import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AboutPage } from './pages/AboutPage';
import { WritersPage } from './pages/WritersPage';
import { HomePage } from './pages/HomePage';

import Navigation from './components/Navigation'

import { createTheme } from '@mui/material/styles'

import { ThemeProvider } from '@emotion/react';
import { WriterPage } from './pages/WriterPage';

const theme  = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffca28',
    },
    secondary: {
      main: '#f50057',
    },
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/writers" element={ <WritersPage/> }/>
        <Route path="/writer/:title" element={ <WriterPage/> }/>
        <Route path="/about" element={ <AboutPage/> }/>
      </Routes>
    </ThemeProvider>
  );
}