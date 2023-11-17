/* eslint-disable react/prop-types */
import { useMemo,useState,useEffect } from 'react';
import {
  MaterialReactTable
} from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink } from "react-router-dom";
import SimpleSnackbar from "./SimpleSnackbar";

//nested data is ok, see accessorKeys in ColumnDef below


function ListPage({carsData,title}){

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

  const [data, setData] = useState(carsData);

  useEffect(() => {
    setData(carsData);
  }, [carsData]);

  
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'photo', //access nested data with dot notation
        header: 'Photo',
        Cell: ({ cell }) => <img id="carPhoto" src={cell.getValue()}/>, 
        size: 100,  
        enableGrouping: false,
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
        accessorFn: (row) => `${row.brand}`,
        size: 110,
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
      {
        accessorKey: 'motorInfo.motor.description', //normal accessorKey
        header: 'motor',
        size: 10,
      },
      {
        accessorKey: 'Power', //normal accessorKey
        header: 'Power',
        accessorFn: (row) => `${row.motorInfo.Power.description}`,
        size: 10,
      },
      {
        accessorKey: 'Traccion', //normal accessorKey
        header: 'Traccion',
        accessorFn: (row) => `${row.motorInfo.traccion.description}`,
        size: 10,
      },
      {
        accessorKey: 'Range', //normal accessorKey
        header: 'Range',
        accessorFn: (row) => `${row.motorInfo.Range.description}`,
        size: 10,
      },
      
    ],
    [],
  );

  function addToCompare(car){
    var list = localStorage.getItem("compareList");
    if(list==null){
        console.log(car);
        localStorage.setItem("compareList",JSON.stringify([car]));
    }
    else{
        var oldlist = JSON.parse(localStorage.getItem("compareList"));
        if(oldlist.length>=4){
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

            <h3>{title}</h3>
            <MaterialReactTable 
            enableColumnOrdering
            enableGrouping
            columns={columns}
            data={data}
            enableRowActions
            onPaginationChange={setPagination} //hoist pagination state to your state when it changes internally
            state={{ pagination }} //pass the pagination state to the table
            initialState={{ columnVisibility: { brand: false,Traccion:false,Range:false} }}
            positionActionsColumn="last"
            displayColumnDefOptions={{
              'mrt-row-actions': {
                header: 'Actions', //change header text
                size: 0.1, //make actions column wider
              },
            }}
            renderRowActions={({ row, table }) => (
              <Box sx={{display: 'flex', flexWrap: 'nowrap', gap: '9px'}}>
              <Tooltip title= "Inspect car" arrow>
                  <NavLink key={row.id} to={"/carPage/"+row.id}>
                  <IconButton
                    color="primary">
                    
                    <VisibilityIcon />
                    
                  </IconButton>
                  </NavLink>
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