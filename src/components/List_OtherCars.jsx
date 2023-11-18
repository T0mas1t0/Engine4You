import { useMemo } from 'react';
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  useMaterialReactTable,
} from 'material-react-table';
import { MenuItem } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from "react-router-dom";

export function List_OtherCars({data,title,addToCompare}){
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'photo', //access nested data with dot notation
        header: 'Photo',
        Cell: ({ cell }) => <img id="carPhoto" src={cell.getValue()}/>, 
        size: 100,  
        enableGrouping: false,
      },
      {
        accessorKey: 'model',
        header: 'model',
        accessorFn: (row) => `${row.brand} ${row.model}`,
        size: 110,
        enableGrouping: false,
      },
      {
        accessorKey: 'price', //normal accessorKey
        header: 'price',
        Cell: ({ cell }) => <span>{cell.getValue()+" €"}</span>, 
        size: 10,
      },
      
    ],
    [],
    //end
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableRowActions: true,
    positionActionsColumn: 'last',
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default, //change default background color
    }),
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '0.px solid rgba(81, 81, 81, .5)',
        fontStyle: 'italic',
        fontWeight: 'normal',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        //border: '0.2px solid rgba(81, 81, 81, .5)',
      },
    },
    renderRowActions: ({ row }) => (
      <Box>
      <Tooltip title= "Inspect car" arrow>
        <NavLink key={row.id} to={"/carPage/"+row.original.id}>
            <IconButton color="primary">
              <VisibilityIcon />
            </IconButton>
        </NavLink>
      </Tooltip>
      <Tooltip title= "Add to Compare" arrow>
        <IconButton color="error" onClick={() => addToCompare(row.original)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      </Box>
    ),
  });

  //using MRT_Table instead of MaterialReactTable if we do not need any of the toolbar components or features
  return (
    <>

      <MRT_Table table={table}  sx={{width:"40%"}}/>
    </>
    );
}

export default List_OtherCars;
