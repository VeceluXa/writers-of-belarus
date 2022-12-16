import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ICategoryMember, ICategoryPages } from "../models/ICategoryPages";
import { useTranslation } from "react-i18next";

export function useCategoryPages() {
    const { t } = useTranslation("main", { keyPrefix: "urls" });

    const [pages, setPages] = useState<ICategoryMember[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const url = t("urlCategoryAPI");

    async function fetchPages() {
        try {
            setError("");
            setLoading(true);
            const response = await axios.get<ICategoryPages>(url);
            setPages(response.data.query.categorymembers);
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

    return { pages, error, loading };
}
