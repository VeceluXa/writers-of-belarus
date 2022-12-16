import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { IAuthor } from "../models/IAuthor";
import Box from "@mui/material/Box";
export function Author(props: IAuthor) {

    return (
        <Container style={{ height: '15em', width: '12.5em' }}>
            <Box style={{ height: '9.em', width: '9.4em' }}>
                <img
                    src={props.path}
                    alt={props.name}
                    height={'150em'}
                    width={'150em'}
                    style={{
                        boxShadow: '-moz-initial',
                        cursor: 'pointer',
                        borderRadius: '75px',
                        WebkitBoxShadow: '5px 6px 200px grey'
                    }}
                    onClick={() => window.open(props.link)}
                />
            </Box>
            <Box style={{
                marginTop: '0.5em'
            }}>
                <Typography style={{
                    textAlign: 'center',
                    fontStyle: 'oblique',
                    fontFamily: 'Jira',
                    fontSize: '1.2em',
                    color: 'rgba(0, 0, 0, 0.8)'
                }}>
                    {props.name}
                </Typography>
            </Box>
        </Container>
    )
}