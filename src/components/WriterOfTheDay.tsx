import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useWriterDayPage } from "../hooks/WriterDayPageFetch";
import Loader from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { useEffect, useState } from "react";
import { ISummaryPage } from "../models/ISummary"
import { useViewport } from "../hooks/Viewport"
import { Navigate, useNavigate } from "react-router-dom";

export function WriterOfTheDay() {
    const { t } = useTranslation("main", { keyPrefix: "writer-of-the-day" });
    var { page, error, loading } = useWriterDayPage();
    const [pageSummary, setPageSummary] = useState<ISummaryPage | null>(null)

    const { width } = useViewport()
    const breakpoint = 620

    const navigate = useNavigate()

    useEffect(() => {
        if (page) {
            for (let value in page.query.pages) {
                setPageSummary(page.query.pages[value])
            }
        }
    }, [loading])

    const MoreButton = (
        <Button
            variant="contained"
            onClick={() => {
                navigate(`/writers-of-belarus/writer/${pageSummary?.title.split(" ").join("_")}`)
            }}
            sx={{
                width: 'fit-content',
                margin: 'auto'
            }}
        >
            {t('button')}
        </Button>
    )

    const TitleText = (
        <Typography
            variant='h5'
            color='text.primary'
            gutterBottom
            sx={{
                fontStyle: "oblique",
                fontWeight: "normal",
                textAlign: "center",
            }}
        >
            {pageSummary?.title}

        </Typography>
    )

    const DescriptionText = (
        <Typography
            variant='body1'
            color='text.primary'
            gutterBottom
            sx={{
                fontStyle: "oblique",
                fontWeight: "normal",
                fontSize: '1.1em'
            }}
        >
            {pageSummary?.extract}

        </Typography>
    )

    const BrowserView = (
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

            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {pageSummary &&
                <Box
                    display='flex'
                >
                    <Box
                        marginRight={4}
                    >
                        {MoreButton}

                    </Box>
                    <Box>
                        {TitleText}
                        {DescriptionText}
                    </Box>
                </Box>


            }
        </Box>
    )

    const MobileView = (
        <Box
            display="flex"
            flexDirection="column"
            marginBottom={20}
            marginX={2}
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
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {pageSummary && (
                <Box
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                >
                    {TitleText}
                    {DescriptionText}
                    {MoreButton}
                </Box>
            )}
        </Box>
    )

    // if (width < breakpoint)
    //     return MobileView
    // else
    //     return BrowserView

    return MobileView
}
