import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid  } from '@material-ui/core';
import './navbar.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return (
        <AppBar position="static" className="MuiAppBar-colorPrimary " >
            <Toolbar variant="dense" className='tamanho MuiAppBar-colorPrimary teste' >
            <Grid className="box1" container xs={12}> {/* 3,3,3,3 devs*/}
            <Grid container item alignItems='center' xs={6}>
                <Grid item xs={12}>
                    <Typography variant="h5" align="left" gutterBottom className='textos' >Projeto desenvolvido por Lara Lourenço</Typography>
                </Grid>
            </Grid>
            
            <Grid container item alignItems='center' xs={6}  justifyContent= 'flex-end'>
                <Grid item xs={6}>
                <Typography variant="subtitle2" align="left" gutterBottom className='textos' ></Typography>
                </Grid>
                <Grid item xs={6}>
                    <a href="hhttps://github.com/laralrnc" target="_blank">
                        <GitHubIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/laralouren%C3%A7o/" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Grid>
            </Grid>
        </Grid>


            </Toolbar>
        </AppBar >
    )
}
export default Navbar