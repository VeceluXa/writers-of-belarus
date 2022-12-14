import Container from '@mui/material/Container'
import {AuthorFedya} from "./AuthorFedya";
import React from "react";
import {AuthorVitya} from "./AuthorVitya";
import {Table} from "@mui/material";
import {AuthorVova} from "./AuthorVova";

export function Authors() {
    return(
        <Container>
            <Table style= {{
                WebkitColumnCount:'3',
                columnCount:'3',
                columnWidth:'7em',
                columns:'7em',
                display:'-webkit-box',
                marginTop:'5em'
            }}>
                <AuthorFedya/>
                <AuthorVitya/>
                <AuthorVova/>
            </Table>
        </Container>
    )
}