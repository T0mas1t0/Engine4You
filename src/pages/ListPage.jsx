import { useMemo,useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {Cars} from '../mockData/mockData';
import { Box,Stack, IconButton } from '@mui/material';
import { Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';

//nested data is ok, see accessorKeys in ColumnDef below




const ListPage = () => {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5, //customize the default page size
  });

  const [data, setData] = useState(Cars);
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'photo', //access nested data with dot notation
        header: 'Photo',
        Cell: ({ cell }) => <img src={cell.getValue()} width={"70%"}/>, 
        size: 100,  
      },
      {
        accessorKey: 'model',
        header: 'model',
        size: 10,
      },
      {
        accessorKey: 'price', //normal accessorKey
        header: 'price',
        size: 10,
      },
      {
        accessorKey: 'motorInfo.motor.description', //normal accessorKey
        header: 'motor',
        size: 10,
      },
      {
        accessorKey: 'motorInfo.Power.description', //normal accessorKey
        header: 'power',
        size: 10,
      },
      
    ],
    [],
  );



  return (
            <>
            <div style={{ margin: '2%' }}>

            
            <MaterialReactTable 
            
            columns={columns}
            data={data}
            enableRowActions
            onPaginationChange={setPagination} //hoist pagination state to your state when it changes internally
            state={{ pagination }} //pass the pagination state to the table
            renderRowActions={({ row, table }) => (
              <Box sx={{padding:0,margin:0}}>
              <Tooltip title= "Inspect car" arrow>
                <IconButton
                    color="primary"
                    onClick={() => {
                      
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title= "Add to Compare" arrow>
                  <IconButton
                    color="error"
                    onClick={() => {
                      
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            
          />
          </div>
          </>);
};

export default ListPage;
