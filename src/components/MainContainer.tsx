import React from 'react'
import { Container } from "@mui/material"
import { useTheme } from '@mui/material/styles';

interface IMainContainerProps {
    children: React.ReactNode
}

export default function MainContainer({ children }: IMainContainerProps) {
    const theme = useTheme();
    console.log(theme);
    
    return(
        <Container
            maxWidth='md'
            sx={{
                paddingTop: 2,
                padding: 5,
                justifyContent: 'center',
                backgroundColor: theme.palette.background.paper
            }}
        >
            { children && children }
        </Container>
    )
}