import Container from '@mui/material/Container'
import {Author} from "./Author";
import {data} from '../data/AuthorsData'
import Box from "@mui/material/Box";

export function Authors() {

    return(
        <Container>
            <Box style={{
                display:'flex',
                marginTop:'5em',
                flex:'auto',
                flexWrap:'wrap'
            }}>
                {data.map(author =>
                    <Author path={author.path} name={author.name} link={author.link}/>
                )}
            </Box>
        </Container>
    )
}
//