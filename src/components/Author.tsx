import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { IAuthor } from "../models/IAuthor";
import Box from "@mui/material/Box";
export function Author(props: IAuthor) {

    return (
        <Box 
            style={{ height: '15em', width: '12.5em' }}
            display='flex'
            alignItems='center'
            flexDirection='column'
            margin='auto'
        >
            <Box 
                style={{ height: '9.em', width: '10.5em' }}
                display='flex'
                justifyContent='center'
            >
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
        </Box>
    )
}