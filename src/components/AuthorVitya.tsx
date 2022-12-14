import React from "react";
import Container from "@mui/material/Container";
import imgVitya from './imgVitya.png'
import Typography from "@mui/material/Typography";
export function AuthorVitya() {

    return (
        <Container style={{height:'160px', width:'300px'}}>
            <Typography>
                <tr style={{height:'110px', width:'330px'}}>
                    <img
                        src={imgVitya}
                        alt="Danilov Fedor"
                        height={'150px'}
                        width={'150px'}
                        style={{
                            boxShadow:'-moz-initial',
                            cursor:'pointer',
                            borderRadius:'75px',
                            WebkitBoxShadow:'5px 6px 100px grey'
                        }}
                        onClick={() => window.open('https://github.com/BoskoVictor')}
                    />
                </tr>
                <tr style={{textAlign:'center'}}>
                    Bosko Viktor
                </tr>
            </Typography>
        </Container>
    )
}