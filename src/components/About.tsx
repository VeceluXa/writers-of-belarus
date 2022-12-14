import { Typography } from '@mui/material'
import Container from '@mui/material/Container'

export function About() {
    return(
        <Container
            sx={{
                marginBottom: 55
            }}
        >
            <Typography
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom 
                sx={{
                    fontStyle: 'oblique', 
                    fontWeight: 'medium',
                    textAlign: 'center'
                }}
            >
                Writers of Belarus
            </Typography>

            <Typography
                variant="h6" 
                align="center" 
                color="text.secondary" 
                paragraph
                sx={{
                    fontWeight: 'light',
                    fontStyle: 'italic',
                    mx: 10,
                    textAlign: 'center'
                }}
            >
                Our website will help you immerse yourself in the world of Belarusian literature. We have collected for you more than three hundred of the most famous Belarusian authors.
                </Typography>
        </Container>
    )
}