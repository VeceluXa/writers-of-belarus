import { useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import { usePage } from "../hooks/WriterPageFetch";
import Loader from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Typography } from "@mui/material";

export function WriterPage() {

    const { title } = useParams()
    const { page, error, loading } = usePage(title as string)

    return(
        <MainContainer>
            { loading && <Loader/> }
            { error && <ErrorMessage error={ error }/> }
            { page && 
                <div dangerouslySetInnerHTML={{ __html: page.parse.text["*"] }}></div>
            }
        </MainContainer>
    )
}