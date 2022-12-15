import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { AboutPage } from './pages/AboutPage';
import { WritersPage } from './pages/WritersPage';
import { HomePage } from './pages/HomePage';

import Navigation from './components/Navigation'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material';
import { themeOptions } from './themes/theme'

import { WriterPage } from './pages/WriterPage';

const theme = createTheme(themeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Box
          flex={0}
        >
          <Navigation/>
        </Box>        
        <Routes>
          <Route path="/writers-of-belarus" element={ <HomePage/> }/>
          <Route
            path="/writers-of-belarus/writer"
            element={<Navigate to="/writers-of-belarus/writers" replace />}
          />
          <Route path="/writers-of-belarus/writers" element={ <WritersPage/> }/>
          <Route path="/writers-of-belarus/writer/:title" element={ <WriterPage/> }/>
          <Route path="/writers-of-belarus/about" element={ <AboutPage/> }/>
        </Routes>
      </div>
      
    </ThemeProvider>
  );
}