import React from 'react'
import { Container } from "@mui/material"
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IMainContainerProps {
    children: React.ReactNode
}

export default function MainContainer({ children }: IMainContainerProps) {
    const theme = useTheme();

    return (
        <Box
            flex={1}
            overflow="auto"
            display="flex"
        >
            <Container
                maxWidth='md'
                sx={{
                    paddingTop: 2,
                    padding: { xs: 0.5, md: 5 },
                    backgroundColor: theme.palette.background.paper
                }}
            >
                {children && children}
            </Container>
        </Box>
    )
}