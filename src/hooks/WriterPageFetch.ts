import axios, { AxiosError } from 'axios';
import React, {useEffect, useState} from 'react';
import { IPage } from '../models/IPage'

export function usePage(title: string) {
    const [page, setPage] = useState<IPage | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=parse&prop=text&page=${ title.split(' ').join('_') }&format=json`
    const url2 = `https://be.wikipedia.org/w/api.php?origin=*&action=parse&prop=text&page=${ title.split(' ').join('_') }&format=json`

    async function fetchPages(title: string) {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IPage>(url2)
            

            setPage(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchPages(title)
    }, [])

    return { page, error, loading }
}