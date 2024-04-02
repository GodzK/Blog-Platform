
import './category.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from 'react-bootstrap/Button';
function category() {
  return (
    <div className="grid-container">
    <div className="grid-item">  <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="../public/images/Frontend.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button variant="outline-primary">Front-end</Button>{' '}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
    <div className="grid-item"> <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="../public/images/Backend.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button variant="outline-danger">Back-end</Button>{' '}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
    <div className="grid-item"> 
    <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="../public/images/ux-ui.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button variant="outline-success">UX/UI</Button>{' '}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
    <div className="grid-item"> <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="../public/images/webf.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button variant="outline-warning">Framework</Button>{' '}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
  </div>
  )
}

export default category
