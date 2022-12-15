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
                variant="h2"
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
                Writers of Belarus is a free multilingual online encyclopedia of writers who contributed to Belarusian culture and history. It is written and maintained by 3 students of BSUIR, FCSN, Software in IT. The data is provided by free API from wikipedia.org. 
                </Typography>

                <Typography
                    variant="h5"
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
                    Our website will help you immerse yourself in the world of Belarusian literature.
                </Typography>

                
        </Container>
    )
}