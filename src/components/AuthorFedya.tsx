import React from "react";
import Container from "@mui/material/Container";
import imgFedya from './imgFedya.png'
import Typography from "@mui/material/Typography";
export function AuthorFedya() {

    return (
        <Container style={{height:'160px', width:'300px'}}>
            <Typography>
            <tr style={{height:'110px', width:'330px'}}>
                <img
                    src={imgFedya}
                    alt="Danilov Fedor"
                    height={'150em'}
                    width={'150em'}
                    style={{
                        boxShadow:'-moz-initial',
                        cursor:'pointer',
                        borderRadius:'75px',
                        WebkitBoxShadow:'5px 6px 200px grey',
                    }}
                    onClick={() => window.open('https://github.com/VeceluXa')}
                />
            </tr>
            <tr style={{textAlign:'center'}}>
                Danilov Fedor
            </tr>
            </Typography>
        </Container>
    )
}