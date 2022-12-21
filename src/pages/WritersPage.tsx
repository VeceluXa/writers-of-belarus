import MainContainer from "../components/MainContainer"
import { useCategoryPages } from "../hooks/CategoryPagesFetch"

import { DataGrid, GridColDef, GridEventListener, ruRU, enUS } from "@mui/x-data-grid"
import { ICategoryMember } from "../models/ICategoryPages"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "../components/ErrorMessage";
import Loader from '../components/Loader'
import { useEffect } from "react";

interface IRow {
    id: number,
    name: string
}

export function WritersPage() {
    const { t, i18n } = useTranslation('main', { keyPrefix: 'writers' })
    var { pages, error, loading } = useCategoryPages()
    const navigate = useNavigate();

    useEffect(() => {
        i18n.on('languageChanged', () => {
            window.location.reload()
        })
        return () => {
            i18n.off('languageChanged');
        };
    });

    function toRow(pages: ICategoryMember[]) {
        let rows: IRow[] = []
        if (pages) {
            pages.forEach((it, index) => {
                rows.push({ 'id': index, 'name': it.title })
            })
        }
        return rows
    }

    const columns: GridColDef[] = [{ field: 'name', headerName: `${t('headerName')}`, flex: 1 }]

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        const path = `/writers-of-belarus/writer/${String(params.row.name).split(' ').join('_')}`
        navigate(path)
    };

    const gridLocale = () => {
        var locale = enUS.components.MuiDataGrid.defaultProps.localeText
        if (i18n.language === 'ru')
            locale = ruRU.components.MuiDataGrid.defaultProps.localeText
        return locale
    }


    return (
        <MainContainer>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {pages &&
                <DataGrid
                    localeText={gridLocale()}
                    onRowClick={handleRowClick}
                    rows={toRow(pages.sort((a, b) => a.title.localeCompare(b.title)))}
                    columns={columns}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    // checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            }
        </MainContainer>
    )
}
