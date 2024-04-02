import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import Grid from '@mui/material/Grid';
import './statistic.css';
import db from './db.json';

function Statistic(props) {
  const totalViewers = db.reduce((accumulator, currentValue) => accumulator + currentValue.viewer, 0);
  const totalBlogs = db.length;

  return (
    <div className="containerr">
       <h1 style={{ textAlign: "center" , padding:"3rem"}}>Statistic📈</h1>
      <Grid container spacing={3} className="grid-container">
        <Grid item xs={12} md={6} className='grid-item'>
          <CardContent>
            <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
              All Blog
            </Typography>
            <Typography variant="h4" component="div">
              Total Viewer  {totalViewers}
            </Typography>
            <Typography color="text.secondary">
              Active
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} className='grid-item'>
          <CardContent>
            <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
              All Blog
            </Typography>
            <Typography variant="h4" component="div">
              Total Blog {totalBlogs} 
            </Typography>
            <Typography color="text.secondary">
              Active
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} className='grid-item'>
          <CardContent>
            <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
              People love this
            </Typography>
            <Typography variant="h4" component="div" className="d-flex justify-content-center align-items-center">
              <Stack>
                <Gauge width={120} height={120} value={60} />
              </Stack>
            </Typography>
            <Typography color="text.secondary">
              Active
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} className='grid-item'>
          <CardContent>
            <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
              People love this
            </Typography>
            <Typography variant="h4" component="div" className="d-flex justify-content-center align-items-center">
              <Stack>
                <Gauge width={120} height={120} value={60} />
              </Stack>
            </Typography>
            <Typography color="text.secondary">
              Active
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Statistic;
