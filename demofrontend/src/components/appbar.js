import { AppBar,Toolbar,IconButton,Typography} from "@mui/material";
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#6B8E23'
      }
    }
  })

export default function appbar(){ 
    return(
        <div >
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    </IconButton>
                     <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}
