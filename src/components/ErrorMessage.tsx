import { Typography } from '@mui/material'
import MainContainer from './MainContainer'

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return(
        <MainContainer>
            <Typography
                sx={{
                    color: 'theme.palette.error.main'
                }}
            >
                { error }
            </Typography>
        </MainContainer>
    )
}