import { Checkbox, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'

import { rows } from '../DemoData/Data'
import { HeadCells } from '../DemoData/DataHead'

export default function DataDisplayTable() {

    const [dataHolder, setDataHolder] = useState([]);
    const [selected, setSelected] = React.useState([]);

    const [search, setSearch] = React.useState("");



    useEffect(() => {

        setDataHolder(rows);

        // setDataHolder((prevState) => {
        //     return { ...prevState, rows }
        // })

    }, [])


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.sl_no);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, row) => {


        const selectedIndex = selected.indexOf(row.sl_no);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, row.sl_no);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);



    };


    const serchFiled = (event) => {


        setSearch(event.target.value)

    




    }

    console.log(search);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const isSelected = (sl_no) => selected.indexOf(sl_no) !== -1;



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;



    return (

        <>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField onChange={serchFiled} style={{ borderRadius: '16' }} id="outlined-basic" label="Seach Cutsomer number" variant="outlined" />
            </Box>

            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader sx={{ minWidth: 750 }}
                            aria-label="sticky table" >

                            <HeadOfTable onSelectAllClick={handleSelectAllClick} numSelected={selected.length} rowCount={rows.length} />

                            {dataHolder.length !== 0 ?


                                <TableBody>



                                    {dataHolder.filter((data) => {

                                        if (search == "") {
                                            
                                            return data
                                        }
                                        else if (data.calories.toString().includes(search)) {

                                            return data;
                                        }
                                    }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {



                                        const isItemSelected = isSelected(row.sl_no);

                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (

                                            <TableRow role="checkbox" hover onClick={(event) => handleClick(event, row)} aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.sl_no}
                                                selected={isItemSelected}>
                                                <TableCell padding='checkbox'>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {row.sl_no}
                                                </TableCell>
                                                <TableCell align="left">{row.calories}</TableCell>
                                                <TableCell align="left">{row.fat}</TableCell>
                                                <TableCell align="left">{row.carbs}</TableCell>
                                                <TableCell align="left">{row.protein}</TableCell>
                                            </TableRow>

                                        )
                                    })}

                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: 33 * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                : <Loader />}

                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>


            </Box>
        </>





    )
}



function HeadOfTable(props) {

    const { onSelectAllClick, numSelected, rowCount } = props;

    return (

        <TableHead >
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        color='primary'
                        onChange={onSelectAllClick}
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                    />

                </TableCell>
                {HeadCells.map((headCell) => (
                    <TableCell key={headCell.id} align={headCell.numeric ? 'left' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}>{headCell.label}</TableCell>
                ))}

            </TableRow>
        </TableHead>
    )


}

