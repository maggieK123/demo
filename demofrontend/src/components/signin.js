import { Box, Container, Typography, TextField, FormControlLabel, Checkbox, Button, Grid} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";


export default function Signin(){
    const nav = useNavigate()
    return (
        <Container component='main' maxWidth = 'xs'>
         <Typography component="h1" variant="h5" align="center">
            Hello
         </Typography>
         <TextField margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus>
         </TextField>
         <TextField margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus>
         </TextField>
         <FormControlLabel 
            control={<Checkbox value = "remember"/>}
            label="Remember me" />
            <br></br>
            <Grid>
            <Button type = "submit" variant="contained" style={{display: 'flex'}}>
                Sign In
            </Button>
            <br></br>
            <Link to = '/signup'>
                signup
            </Link>
            </Grid>
            
        </Container>
    )
}