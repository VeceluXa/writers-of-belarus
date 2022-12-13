import axios, { AxiosError } from 'axios';
import React, {useEffect, useState} from 'react';
import { ICategoryMember, ICategoryPages } from "../models/ICategoryPages";

export function useCategoryPages() {
    const [pages, setPages] = useState<ICategoryMember[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const url = 'https://en.wikipedia.org/w/api.php?origin=*&query=opensearch&action=query&cmtitle=Category:Belarusian_writers&list=categorymembers&cmlimit=max&format=json'
    const url2 = 'https://be.wikipedia.org/w/api.php?origin=*&action=query&cmtitle=%D0%9A%D0%B0%D1%82%D1%8D%D0%B3%D0%BE%D1%80%D1%8B%D1%8F:%D0%9F%D1%96%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%96%D0%BA%D1%96_%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%96&list=categorymembers&cmlimit=max&format=json'

    async function fetchPages() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<ICategoryPages>(url2)

            setPages(response.data.query.categorymembers)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchPages()
    }, [])

    return { pages, error, loading }
}