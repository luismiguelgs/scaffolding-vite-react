import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { VERSION } from '../services/constants.service';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logoCiunac from '/logo_ciunac.jpg'

type Login = {
    email: string,
    password:string,
    remember: boolean
}

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://ciunac.unac.edu.pe/">
                CIUNAC
            </Link>
            {` ${new Date().getFullYear()}. version: ${VERSION}`}
        </Typography>
    );
}

export default function LoginPage() 
{
    const {auth, setAuth} = useStateContext()
    const navigate = useNavigate()
    const [error, setError] = React.useState<string>('') //Error Message
    const [open, setOpen] = React.useState<boolean>(false) //Alert
    const [login, setLogin] = React.useState<Login>({
        email: localStorage.getItem('email') || '',
        password: localStorage.getItem('pass') || '',
        remember: Boolean(localStorage.getItem('remember')) || false
    })

    React.useEffect(()=>{
        if(auth){
            //save remember
            if(login.remember){
                localStorage.setItem('email', login.email);
                localStorage.setItem('pass', login.password);
                localStorage.setItem('remember', login.remember ? 'true' : 'false')
            }
            else{
                localStorage.clear()
            }
            //go to dashboard
            navigate('/')
        }
    },[auth])

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = event.target
        setLogin((prevFormData)=>({...prevFormData, [name]:value}))
    }
    const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin((prevFormData)=>({...prevFormData, [event.target.name]: event.target.checked}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //verificacion de usuario
        //AuthService.logIn(login.email, login.password, setAuth, setError, setOpen)
    };

    return (
        <Grid container component="main" sx={{ height: '97vh' }}>
            <Grid item xs={false} sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <img src={logoCiunac} style={{width:'360px'}}/>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingresar
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={login.email}
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={login.password}
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={login.remember} onChange={handleChangeCheck} color="primary" name='remember' />}
                            label="Recuerdame"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Login
                        </Button>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
