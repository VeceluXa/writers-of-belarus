import { Navigate, useNavigate, useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import { usePage } from "../hooks/WriterPageFetch";
import Loader from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Typography } from "@mui/material";
import { pageFilter } from "../hooks/PageFilterBy";
import { Interweave } from "interweave";
import InterweaveFilter from '../hooks/InterweaveFilter'
import { useTranslation } from "react-i18next";

export function WriterPage() {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const { title } = useParams()
    const { page, error, loading } = usePage(title as string)

    i18n.on('languageChanged', () => {
        navigate('/writers-of-belarus/writers')
    })

    return(
        <MainContainer>
            {/* { title && <ErrorMessage error={ 'Error 404. Wrong link passed.' }/> } */}
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