import Container from '@mui/material/Container'
import {Author} from "./Author";
import {data} from '../data/AuthorsData'
import Box from "@mui/material/Box";

export function Authors() {

    return(
        <Container>
            <Box style={{
                WebkitColumnCount:'3',
                columnCount:'3',
                columnWidth:'7em',
                columns:'15em',
                display:'block',
                marginTop:'5em',

            }}>
                {data.map(author =>
                    <Author path={author.path} name={author.name} link={author.link}/>
                )}
            </Box>
        </Container>
    )
}