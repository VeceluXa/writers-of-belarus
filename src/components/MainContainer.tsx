import React from 'react'
import { Container } from "@mui/material"

interface IMainContainerProps {
    children: React.ReactNode
}

export default function MainContainer({ children }: IMainContainerProps) {
    return(
        <Container
            maxWidth='md'
            sx={{
                marginTop: 5,
                padding: 5,
                justifyContent: 'center'
            }}
        >
            { children && children }
        </Container>
    )
}