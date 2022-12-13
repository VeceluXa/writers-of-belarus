import { Typography } from "@mui/material"

import Link from "../components/Link"
import { ErrorMessage } from "../components/ErrorMessage"
import Loader from "../components/Loader"
import MainContainer from "../components/MainContainer"
import { useCategoryPages } from "../hooks/CategoryPagesFetch"

export function WritersPage() {
    const { pages, error, loading } = useCategoryPages()

    return(
        <MainContainer>
            { loading && <Loader/> }
            { error && <ErrorMessage error={ error }/> }
            { pages && pages
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map(page => 
                <Typography
                    variant="body1"
                >
                    <Link
                        href={'/writer/' + page.title}
                    >
                        { page.title }
                    </Link>
                    
                </Typography>
            ).sort() }
        </MainContainer>
    )
}