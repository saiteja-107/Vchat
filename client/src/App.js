// eslint-disable-next-line 
import React from 'react'
import { Typography,AppBar } from '@mui/material';
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options';
import Notification from './components/Notification';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));
  

function App() {
    const classes=useStyles();

  return (
    <div className={classes.wraper}>
       <AppBar position='static' color='inherit' className={classes.appBar}>
            <Typography variant="h2" align="center">Video Chat</Typography>
        </AppBar>

 <VideoPlayer/>
        <Options>
            <Notification />

        </Options> 
    </div>
  )
}

export default App