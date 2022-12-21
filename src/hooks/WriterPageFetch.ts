import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IPage } from "../models/IPage";
import { useTranslation } from "react-i18next";

export function usePage(title: string) {
    const { t, i18n } = useTranslation("main", { keyPrefix: "urls" });

    const [page, setPage] = useState<IPage | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const url = t("urlAuthorAPI", { name: `${title.split(" ").join("_")}` });

    async function fetchPages(title: string) {
        if (title === "")
            return
        try {
            setError("");
            setLoading(true);
            console.log(i18n.language);
            const response = await axios.get<IPage>(url);

            setPage(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchPages(title);
    }, []);

    return { page, error, loading };
}
