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
import { NavLink } from "react-router-dom";
import SimpleSnackbar from "../components/SimpleSnackbar";

//nested data is ok, see accessorKeys in ColumnDef below


const ListPage = () => {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5, //customize the default page size
  });

  const [open, setOpen] = useState(false);
  const [txt, setText] = useState("");
  const [severityType, setSeverityType] = useState("");

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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

  function addToCompare(car){
    console.log("My car");
    console.log(car);
    var list = localStorage.getItem("compareList");
    if(list==null){
        console.log(car);
        localStorage.setItem("compareList",JSON.stringify([car]));
    }
    else{
        var oldlist = JSON.parse(localStorage.getItem("compareList"));
        var tmp= [];
        if(tmp.length==4){
            setText("A lista encontra-se cheia! (max.: 4 carros) ");
            setOpen(true);
            setSeverityType("error");
        }
        else{
            if(verifyList(oldlist,car)){
                setText("Adicionado à Lista de comparação com Sucesso!");
                setOpen(true);
                setSeverityType("success");
                oldlist.push(car);
                localStorage.setItem("compareList",JSON.stringify(oldlist));
            }
            else{
                setText("Carro já se encontra na lista!");
                setOpen(true);
                setSeverityType("error");
            }
        }
        
    }
    console.log(car);
  }

  function verifyList(oldlist,car){
    for(var i = 0;i<oldlist.length;i++){
        if(oldlist[i].id==car.id){
            return false;
        }
    }
    
    return true;
}




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
                    color="primary">
                    <NavLink key={row.id} to={"/carPage/"+row.id} sx={{ my: 2, color: 'white', display: 'block', mr:10 }}>
                    <VisibilityIcon />
                    </NavLink>
                  </IconButton>
                </Tooltip>
                
                <Tooltip title= "Add to Compare" arrow>
                  <IconButton
                    color="error"
                    onClick={() => addToCompare(row.original)}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            
          />
          </div>
          <SimpleSnackbar text={txt} handleClose={handleClose} open={open} severityType={severityType}/>
          </>);
};

export default ListPage;
