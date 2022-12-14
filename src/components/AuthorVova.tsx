import React from "react";
import Container from "@mui/material/Container";
import imgVova from './imgVova.png'
import Typography from "@mui/material/Typography";
export function AuthorVova() {

    return (
        <Container style={{height:'160px', width:'300px'}}>
            <Typography>
                <tr style={{height:'110px', width:'330px'}}>
                    <img
                        src={imgVova}
                        alt="Danilov Fedor"
                        height={'150em'}
                        width={'150em'}
                        style={{
                            boxShadow:'-moz-initial',
                            cursor:'pointer',
                            borderRadius:'75px',
                            WebkitBoxShadow:'5px 6px 200px grey'
                        }}
                        onClick={() => window.open('https://github.com/BashlikovV')}
                    />
                </tr>
                <tr style={{textAlign:'center'}}>
                    Bashlikov Vladimir
                </tr>
            </Typography>
        </Container>
    )
}