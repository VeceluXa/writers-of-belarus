import { Typography } from '@mui/material'
import Container from '@mui/material/Container'

export function About() {
    return(
        <Container
            sx={{
                marginBottom: 5
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center'
                }}
            >
                Writers of Belarus
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'justify'
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti tempora? Voluptatum accusamus in laudantium sequi quos soluta eum voluptas excepturi vitae iure qui quam, nulla dolorem corporis? Laudantium maiores commodi, sapiente dolores ut odio magnam nulla placeat ipsa praesentium voluptates id fuga optio sint eveniet nihil eligendi quaerat quod beatae provident. Ipsum quae vel officia ipsam hic corporis non dignissimos, doloremque eum rem ducimus quibusdam, vitae, ullam quos. Ratione labore officia, qui velit maxime in dolorum sapiente hic. Voluptatum enim adipisci ut exercitationem libero cum culpa recusandae, dolorem officia ea non aperiam! Et ab reprehenderit asperiores assumenda, molestias nobis!
            </Typography>
        </Container>
    )
}