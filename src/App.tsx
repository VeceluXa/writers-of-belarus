import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AboutPage } from './pages/AboutPage';
import { WritersPage } from './pages/WritersPage';
import { HomePage } from './pages/HomePage';

import Navigation from './components/Navigation'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { themeOptions } from './themes/theme'

import { WriterPage } from './pages/WriterPage';

const theme = createTheme(themeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
      <div
        style={{
          backgroundColor: theme.palette.background.default
        }}
      >
        <Routes>
          <Route path="/writers-of-belarus" element={ <HomePage/> }/>
          <Route path="/writers-of-belarus/writers" element={ <WritersPage/> }/>
          <Route path="/writers-of-belarus/writer/:title" element={ <WriterPage/> }/>
          <Route path="/writers-of-belarus/about" element={ <AboutPage/> }/>
        </Routes>
      </div>
      
    </ThemeProvider>
  );
}