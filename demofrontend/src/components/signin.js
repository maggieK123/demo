import { Box, Container, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Grid} from "@mui/material";




export default function signin(){
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
            <Link>
            {'Dont have an account? Sign Up'}
            </Link>
            </Grid>
            
        </Container>
    )
}