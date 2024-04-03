
import './category.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Link} from 'react-router-dom';
function category() {
  return (
    <div className="grid-container">
      
    <div className="grid-item">  <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="/images/Frontend.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to="/Frontend"><Button variant="outline-primary">Front-end</Button>{' '}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
    <div className="grid-item"> <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="/images/Backend.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         <Link to="/Backend"><Button variant="outline-danger">Back-end</Button>{' '}</Link> 
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
          image="/images/ux-ui.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         <Link to="/UX-UI"><Button variant="outline-success">UX/UI</Button>{' '}</Link> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
    <div className="grid-item"> <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="400"
          image="/images/webf.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Link to="/Framework"><Button variant="outline-warning">Framework</Button>{' '}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      
    </Card></div>
  </div>
  )
}

export default category
