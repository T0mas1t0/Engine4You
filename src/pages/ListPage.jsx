import {Cars} from '../mockData/mockData';
import List from '../components/List';
//nested data is ok, see accessorKeys in ColumnDef below


function ListPage(){

  return(
        <>
        <List carsData={Cars} title="List of Cars"/>
        </>
  );
}

export default ListPage;