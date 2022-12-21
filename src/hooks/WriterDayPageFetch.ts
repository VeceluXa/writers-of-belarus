import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IPage } from "../models/IPage";
import { useTranslation } from "react-i18next";
import { ICategoryMember, ICategoryPages } from "../models/ICategoryPages";
import { ISummary } from "../models/ISummary"

export function useWriterDayPage() {
    const { t } = useTranslation("main", { keyPrefix: "urls" });

    const [pages, setPages] = useState<ICategoryMember[] | null>(null);
    const [page, setPage] = useState<ISummary | null>(null);

    const [loadingPages, setLoadingPages] = useState(false);
    const [errorPages, setErrorPages] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchPages() {
        try {
            setError("");
            setLoadingPages(true);
            // console.log(i18n.language);
            // console.log("fetcj da");
            

            const urlCategory = t("urlCategoryAPI")
            const responseCategory = await axios.get<ICategoryPages>(urlCategory);
            setPages(responseCategory.data.query.categorymembers);
            
            if (!pages) {
                throw "Can't fetch pages."
            }

            // console.log("fsfaf")
            // fetchPage(pages)

            // const urlPage = t("urlAuthorAPI", { name: `${pages[Math.random()%pages.length].title.split(" ").join("_")}` });
            // const responsePage = await axios.get<IPage>(urlPage)
            // if (!page) {
            //     throw "Can't fetch pages."
            // }
            // setPage(responsePage.data)

            setLoadingPages(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoadingPages(false);
            setErrorPages(error.message);
        }
    }

    async function fetchPage(pages: ICategoryMember[] | null) {
        try {
            if (!pages)
                throw "Couldn't fetch category."

            setError("");
            setLoading(true);
            
            // console.log("Fetch pages");
            // console.log(pages[Math.floor(Math.random() * pages.length)])
            const urlPage = t("urlPageSummary", { name: `${pages[Math.floor(Math.random() * pages.length)].title}` });
            const responsePage = await axios.get<ISummary>(urlPage)
            setPage(responsePage.data)
            console.log(responsePage.data)
            // console.log(page)

            if (!page) {
                throw "Couldn't fetch page."
            }

            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchPages();
    }, []);

    useEffect(() => {
        fetchPage(pages);
    }, [pages]);

    return { page, error, loading };
}
