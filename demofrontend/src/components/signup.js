import { Box, Container, Typography, TextField, FormControlLabel, Checkbox, Button, Grid} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";


export default function Signup(){
    const navigate = useNavigate();

    const navHome = () => {
        navigate('/home');
    };
    return (
        <Container component='main' maxWidth = 'xs'>
            <Typography component="h1" variant="h5" align="center">
                Sign Up!
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
            <Button onClick={navHome} variant="contained" style={{display: 'flex'}}>
                Create An Account
            </Button>
            

            
            
        </Container>
    );
}