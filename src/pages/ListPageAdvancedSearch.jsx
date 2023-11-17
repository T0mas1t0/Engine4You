import {useState,useEffect} from 'react';
import List from '../components/List';

//nested data is ok, see accessorKeys in ColumnDef below


function ListPageAdvancedSearch(){

  const [carsList,setCarsList] = useState([]);

  useEffect(() => {
    var list = localStorage.getItem("AdvancedSearch");
    console.log(ListPageAdvancedSearch);
    console.log(list);
    if(list!=null){
      setCarsList(JSON.parse(list));
    }
  }, []);


  
  return(
        <>
        <List carsData={carsList} title="Advanced search results:"/>
        </>
  );
}

export default ListPageAdvancedSearch;