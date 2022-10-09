import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useGetAttractionsByIDQuery } from '../services/attraction';
import Grid from '@mui/material/Grid';
import {useSelector} from 'react-redux'

export default function ImgMediaCard() {
  const attraction = useSelector((state)=>state.attraction.value)
    const {data,error,isLoading} = useGetAttractionsByIDQuery(attraction);

  return (
    <div className='attraction-card'>
    {error ? (<>Error!</>
    ) : isLoading ? (
      <>Loading...</>
    ): data? (
    <Card>
        <Grid container spacing={2}>
        <Grid item sm={4}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="100%"
        image={data.attraction.coverimage}
      />
      </Grid>
      <Grid item sm={8}>
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {data.attraction.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.attraction.detail}
        </Typography>
      </CardContent>
      </Grid>
      </Grid>
      
    </Card>):null}
    </div>
  );
}
