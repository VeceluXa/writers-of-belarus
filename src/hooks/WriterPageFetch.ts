import axios, { AxiosError } from 'axios';
import {useEffect, useState} from 'react';
import { IPage } from '../models/IPage'
import { useTranslation } from 'react-i18next';

export function usePage(title: string) {
    const { t, i18n } = useTranslation('main', { keyPrefix: 'urls'})

    const [page, setPage] = useState<IPage | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const url = t('urlAuthorAPI', { name: `${ title.split(' ').join('_') }` })
    // const url = `https://en.wikipedia.org/w/api.php?origin=*&action=parse&prop=text&page=${ title.split(' ').join('_') }&format=json`
    const url2 = `https://be.wikipedia.org/w/api.php?origin=*&action=parse&prop=text&page=${ title.split(' ').join('_') }&format=json`

    async function fetchPages(title: string) {
        try {
            setError('')
            setLoading(true)
            console.log(i18n.language)
            const response = await axios.get<IPage>(url)
            

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