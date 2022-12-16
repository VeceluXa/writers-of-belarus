import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import {IAuthor} from "../models/IAuthor";
import Box from "@mui/material/Box";
export function Author(props: IAuthor) {

    return (
        <Container style={{height:'15em', width:'12.5em'}}>
            <Typography>
                <Box style={{height:'9.em', width:'9.4em'}}>
                    <img
                        src={props.path}
                        alt="Danilov Fedor"
                        height={'150em'}
                        width={'150em'}
                        style={{
                            boxShadow:'-moz-initial',
                            cursor:'pointer',
                            borderRadius:'75px',
                            WebkitBoxShadow:'5px 6px 200px grey'
                        }}
                        onClick={() => window.open(props.link)}
                    />
                </Box>
                <Box style={{
                    marginTop:'0.5em',
                    textAlign:'center'
                }}>
                    {props.name}
                </Box>
            </Typography>
        </Container>
    )
}