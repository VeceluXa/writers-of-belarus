import { listClasses, Table, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

import Link from "../components/Link"
import { ErrorMessage } from "../components/ErrorMessage"
import Loader from "../components/Loader"
import MainContainer from "../components/MainContainer"
import { useCategoryPages } from "../hooks/CategoryPagesFetch"
import { WritersByLetter } from "../components/WritersByLetter"

import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid"
import { ICategoryMember } from "../models/ICategoryPages"
import { redirect, useNavigate } from "react-router-dom";

interface IRow {
    id: number,
    name: string
}

export function WritersPage() {
    const { pages, error, loading } = useCategoryPages()
    const navigate = useNavigate();

    function toRow(pages: ICategoryMember[]) {
        let rows: IRow[] = []
        if (pages) {
            pages.forEach((it, index) => {
                rows.push({'id': index, 'name': it.title})
            })
        }
        console.log(rows)
        return rows
    }

    const columns: GridColDef[] = [{ field: 'name', headerName: 'Name', flex: 1 }]

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        const path = `/writers-of-belarus/writer/${String(params.row.name).split(' ').join('_')}`
        navigate(path)
    };
      

    return (
        <MainContainer>
            {pages && 
                <DataGrid
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
