import { listClasses, Table, Typography } from "@mui/material"

import Link from "../components/Link"
import { ErrorMessage } from "../components/ErrorMessage"
import Loader from "../components/Loader"
import MainContainer from "../components/MainContainer"
import { useCategoryPages } from "../hooks/CategoryPagesFetch"

export function check(props: any) {
    return props.value1 == props.value2
}

export function WritersPage() {
    const { pages, error, loading } = useCategoryPages()
    let title = ""

    var showing = true
    
return(
        <MainContainer>
            <Table style={{
                    WebkitColumnCount:'4', 
                    columnCount:'4', 
                    columnWidth:'16em', 
                    columns:'16em',
                    display:'block'
                }}>
            <div style={{display:'block', marginLeft:'0px'}}>
            { loading && <Loader/> }
            { error && <ErrorMessage error={ error }/> }
            { pages && pages
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map(page =>                     
                    <div key={page.pageid}>
                    
                    <Typography variant="body1">
                        <ul style={{
                            margin:'auto'
                        }}>
                            <li>
                                {/* {showing ? "" : <WritersByLetter writersByLetter={page.title.charAt(0)} showingAny={showing}/>} */}
                                <Link href={'/writers-of-belarus/writer/' + page.title}>
                                    { page.title }
                                </Link>
                            </li>
                        </ul>
                    </Typography>
                    
                    </div>
            ).sort() }
            </div>
            </Table>
        </MainContainer>
    )
}
