import { useNavigate, useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import { usePage } from "../hooks/WriterPageFetch";
import Loader from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Interweave } from "interweave";
import InterweaveFilter from '../hooks/WriterFilter'
import { useTranslation } from "react-i18next";

export function WriterPage() {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const { title } = useParams()
    const { page, error, loading } = usePage(title as string)

    i18n.on('languageChanged', () => {
        navigate('/writers-of-belarus/writers')
    })

    return (
        <MainContainer>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {page &&
                <Interweave filters={[new InterweaveFilter()]} content={page.parse.text["*"]} />
            }
        </MainContainer>
    )
}