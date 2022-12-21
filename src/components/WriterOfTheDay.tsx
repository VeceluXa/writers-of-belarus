import { Box, Typography } from "@mui/material";
import { Interweave } from "interweave";
import { useTranslation } from "react-i18next";
import { useWriterDayPage } from "../hooks/WriterDayPageFetch";
import Loader from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

export function WriterOfTheDay() {
    const { t } = useTranslation("main", { keyPrefix: "writer-of-the-day" });
    var { page, error, loading } = useWriterDayPage();

    return (
        <Box
            display="flex"
            flexDirection="column"
            marginBottom={20}
        >
            <Typography
                variant='h2'
                align='center'
                color='text.primary'
                gutterBottom
                sx={{
                    fontStyle: "oblique",
                    fontWeight: "medium",
                    textAlign: "center",
                }}
            >
                {t("header")}
            </Typography>
            { loading && <Loader /> }
            { error && <ErrorMessage error={ error }/> }
            { page && (
                <Box>
                    {/* <Interweave
                        filters={[new InterweaveFilter()]}
                        content={page.parse.text["*"]}
                    /> */}
                    <Interweave  content={page.parse.text['*']} />
                </Box>
            )}
        </Box>
    );
}
