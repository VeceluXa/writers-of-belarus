import { useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import { usePage } from "../hooks/WriterPageFetch";
import Loader from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Typography } from "@mui/material";
import { pageFilter } from "../hooks/PageFilterBy";
import { Interweave } from "interweave";
import InterweaveFilter from '../hooks/InterweaveFilter'

export function WriterPage() {

    const { title } = useParams()
    const { page, error, loading } = usePage(title as string)

    return(
        <MainContainer>
            { loading && <Loader/> }
            { error && <ErrorMessage error={ error }/> }
            { page && 
                <Interweave filters={[new InterweaveFilter()]} content={ page.parse.text["*"] } />
                // <Interweave content={ pageFilter(page.parse.text["*"]) }/>
                // <div dangerouslySetInnerHTML={{ __html: pageFilter(page.parse.text["*"]) }}></div>
            }
        </MainContainer>
    )
}