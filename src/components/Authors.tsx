import Container from '@mui/material/Container'
import {Author} from "./Author";
import { IAuthor } from '../models/IAuthor';
import Box from "@mui/material/Box";

import imgFedya from "../images/imgFedya.png"
import imgVitya from "../images/imgVitya.png"
import imgVova from "../images/imgVova.png"
import { useTranslation } from "react-i18next";
//Bug fixed

export function Authors() {
    const { t } = useTranslation('main', { keyPrefix: 'authors'})

    const authors: IAuthor[] = [
        {path: imgFedya, name: t('nameFyodor'), link: 'https://github.com/VeceluXa'},
        {path: imgVitya, name: t('nameViktor'), link: 'https://github.com/BoskoVictor'},
        {path: imgVova, name: t('nameVladimir'), link: 'https://github.com/BashlikovV'}]

    return(
        <Container>
            <Box style={{
                display:'flex',
                marginTop:'5em',
                flex:'auto',
                flexWrap:'wrap'
            }}>
                {authors.map((author, index) =>
                    <Author path={author.path} name={author.name} link={author.link} key={index}/>
                )}
            </Box>
        </Container>
    )
}
//