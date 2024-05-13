import React from 'react'
import { DataGrid, GridColDef, GridRowParams, GridActionsCellItem, GridRowId, GridToolbar, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box, Grid, Portal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const initialRows = [
    { id: 1, fecha_examen: new Date(1988,8,15), fecha_final: new Date(1988,8,13), idioma: 'Inglés', profesor: 'Ricardo Arjona', salon: '500' },
    { id: 2, fecha_examen: new Date('1988-07-16'), fecha_final: new Date('1988-07-14'), idioma: 'Inglés', profesor: 'Alejandro Saenz', salon: '500' },
    { id: 3, fecha_examen: new Date('1988-06-18'), fecha_final: new Date('1988-06-18'), idioma: 'Portuguez', profesor: 'Ricardo Arjona', salon: '500' },
];

type Row = (typeof initialRows)[number];

function MyCustomToolbar(props: any){
    return (
        <React.Fragment>
            <Portal container={()=> document.getElementById('filter-panel')!}>
                <GridToolbarQuickFilter />
            </Portal>
            <GridToolbar {...props} />
        </React.Fragment>
    )
}

export default function ExamenesPage() 
{
    const [rows, setRows] = React.useState<Row[]>(initialRows);

    const deleteExam = React.useCallback(
        (id: GridRowId) => () => {
          setTimeout(() => {
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        },
        [],
      );
    
    const columns: GridColDef[] = [
        { 
            field: 'fecha_examen', 
            type: 'dateTime', 
            width: 200,
            editable: true,
            renderHeader:() => (
                <strong>
                    {'Fecha Examen '}
                    <span role='img' aria-label='date'>
                        📆
                    </span>
                </strong>
            ) 
        },
        { field: 'fecha_final', headerName: 'Fecha Final', type: 'date', width: 150 },
        { field: 'idioma', headerName: 'Idioma', type: 'string', width: 100 },
        { field: 'profesor', headerName: 'Profesor', type: 'string', width: 200 },
        { field: 'salon', headerName: 'Salón', type: 'string', width: 100 },
        { 
            field: 'actions', 
            type: 'actions', 
            width:100,
            getActions: (params:GridRowParams) => [
                <GridActionsCellItem 
                    icon={<VisibilityIcon />}
                    label='Detalles'
                    //onClick={deleteExam(params.id)}
                />,
                <GridActionsCellItem 
                    showInMenu
                    icon={<DeleteIcon />}
                    label='Borrar'
                    onClick={deleteExam(params.id)}
                />
            ]
        }
    ];
    
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Box id='filter-panel' />
            </Grid>
            <Grid item style={{minHeight:300, width:'100%'}}>
                <DataGrid 
                    pageSizeOptions={[10,25,100]}
                    rows={rows} 
                    columns={columns} 
                    disableColumnMenu
                    slots={{toolbar: MyCustomToolbar}}
                    initialState={{
                        filter:{
                            filterModel:{
                                items: [],
                                quickFilterExcludeHiddenColumns: true
                            }
                        }
                    }}
                    slotProps={{
                        columnsManagement:{
                            disableResetButton:true,
                            disableShowHideToggle: true
                                
                        }
                    }}
                />
            </Grid>
        </Grid>
    )
}
