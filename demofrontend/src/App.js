import './App.css';
import Sign from './components/signin'
import Opening from './components/Opening'
import { AppBar,Toolbar,IconButton,Typography} from "@mui/material";

import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material';

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
        <Sign/>
    </ThemeProvider>
    
  );
}

export default App;
