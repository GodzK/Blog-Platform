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
    <div className="container text-center p-5">
      <Grid container spacing={3} className='gridd' >
        
        <Grid item xl={12} xs={12} sm={6} >
          <Card variant="outlined">
            <CardContent className='bg-success p-3'>
              <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
                All Blog
              </Typography>
              <Typography variant="h4" component="div">
                Total Viewer is {totalViewers}
              </Typography>
              <Typography color="text.secondary">
                Active
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xl={12} xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent className='bg-danger p-3'>
              <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
                All Blog
              </Typography>
              <Typography variant="h4" component="div">
                Total Blog is <br /> {totalBlogs} 
              </Typography>
              <Typography color="text.secondary">
                Active
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xl={12} xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent className='bg-white p-3'>
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
          </Card>
        </Grid>
        
        <Grid item xl={12} xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent className='bg-white p-3'>
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
          </Card>
        </Grid>
      
      </Grid>
    </div>
  );
}

export default Statistic;
