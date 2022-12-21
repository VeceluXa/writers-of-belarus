import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useWriterDayPage } from "../hooks/WriterDayPageFetch";
import Loader from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { useEffect, useState } from "react";
import { ISummaryPage } from "../models/ISummary"

export function WriterOfTheDay() {
    const { t } = useTranslation("main", { keyPrefix: "writer-of-the-day" });
    var { page, error, loading } = useWriterDayPage();
    const [pageSummary, setPageSummary] = useState<ISummaryPage|null>(null)

    useEffect(()=>{
        if (page) {
            for (let value in page.query.pages) {
                setPageSummary(page.query.pages[value])
                console.log("123: " + pageSummary?.extract)
            }
        } else {
            // console.log(0)
        }
    }, [loading])

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
            { pageSummary && (
                <Box>
                    <Typography>
                        { pageSummary.extract }
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
