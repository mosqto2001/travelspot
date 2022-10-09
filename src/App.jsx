import { useState } from 'react'
import { useGetAttractionsQuery } from './services/attraction'
import { DataGrid} from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import './App.css'
import AttractionCard from './components/AttractionCard';
import { useDispatch } from 'react-redux'
import { setAttractionID } from './features/attraction/attractionSlide';
import GoogleMapCard from './components/GoogleMapCard';
import Navbar from './components/Navbar';



function App() {
  const dispatch = useDispatch()
  const {data, error, isLoading} = useGetAttractionsQuery()
  const [position,setPosition] = useState({lat:7.737619,lng:98.7068755})


  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'coverimage',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => <Avatar src={params.value} variant="square"/>
    },
    {
      field: 'latitude',
      headerName: 'Latitude',
      width: 100,
    },{
      field: 'longitude',
      headerName: 'Longitude',
      width: 100,
    }
  ]

  const handleRowClick = (params) => {
    console.log(`Movie "${params.row.latitude}" clicked`);
    setPosition({lat:params.row.latitude,lng:params.row.longitude})
    dispatch(setAttractionID(params.id));
  };

  return (
    <div className="App">
      <Navbar/>
     <div className="container">
      <Container maxWidth="lg">
      {error ? (<>Error!</>
      ) : isLoading ? (
        <>Loading...</>
      ): data? (
    <>
           <GoogleMapCard position={position} className="googlemap"/>
        <div style={{height: 400, width: '100%'}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          onRowClick={handleRowClick}/>
          </div>
          </>
      ):null}
          <AttractionCard/>

      
      </Container>
      </div>
    </div>
  )
}

export default App
