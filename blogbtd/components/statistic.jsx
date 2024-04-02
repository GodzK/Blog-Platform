import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './statistic.css'
import db from './db.json';

function statistic(props) {
  const totalViewers = db.reduce((accumulator, currentValue) => accumulator + currentValue.viewer, 0);
  const totalBlogs = db.length;
  return (
    <div className="container text-center p-5">
 <Box xs={{ maxWidth: 50 }}>
      <Card variant="outlined"><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>All Blog</p>
      </Typography>
      <Typography variant="h5" component="div">
        <p>Total Viewer is {totalViewers} </p>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Active
      </Typography>
     
    </CardContent>
    
  </React.Fragment></Card>
    </Box>
    <Box xs={{ maxWidth: 50 }}>
      <Card variant="outlined"><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>All Blog</p>
      </Typography>
      <Typography variant="h5" component="div">
        <p>Total Blog is {totalBlogs}</p>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Active
      </Typography>
     
    </CardContent>
    
  </React.Fragment></Card>
    </Box>
    <Box xs={{ maxWidth: 50 }}>
      <Card variant="outlined"><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>All Blog</p>
      </Typography>
      <Typography variant="h5" component="div">
        <p>asdad</p>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Active
      </Typography>
     
    </CardContent>
    
  </React.Fragment></Card>
    </Box>
    <Box xs={{ maxWidth: 50 }}>
      <Card variant="outlined"><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>All Blog</p>
      </Typography>
      <Typography variant="h5" component="div">
        <p>asdad</p>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Active
      </Typography>
     
    </CardContent>
    
  </React.Fragment></Card>
    </Box>
</div>
  )
}

export default statistic