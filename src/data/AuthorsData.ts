import {IAuthor} from "../models/IAuthor";
import imgFedya from "../images/imgFedya.png"
import imgVitya from "../images/imgVitya.png"
import imgVova from "../images/imgVova.png"

export const authors: IAuthor[] = [
    {path: imgFedya, name: 'Danilov Fyodor', link: 'https://github.com/VeceluXa'},
    {path: imgVitya, name: "Bosko Viktor", link: 'https://github.com/BoskoVictor'},
    {path: imgVova, name: "Bashlikov Vladimir", link: 'https://github.com/BashlikovV'}]

export let data = authors;