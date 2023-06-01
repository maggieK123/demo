import './App.css';
import Sign from './components/signin';
import Up from './components/signup';
import Home from './components/home';
import { AppBar,Toolbar,IconButton,Typography} from "@mui/material";

import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B8E23'
    }
  }
});

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <AppBar position = "static" color='primary'>
      <Toolbar>

      </Toolbar>
      </AppBar>
      <br></br>
      <Router>
        <Routes>
          <Route path = '/' element ={<Sign/>} />
          <Route path = '/signup' element = {<Up/>} />
          <Route path = '/home' element = {<Home/>} />
        </Routes>
      </Router>
      
      
        
    </ThemeProvider>
    
  );
}

export default App;
