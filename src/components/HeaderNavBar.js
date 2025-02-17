import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import networkingIcon from '../icons/main.png';


export default function HeaderNavBar(){
    return <AppBar position="static" sx={{ height:'6rem', backgroundColor: '#FFE5CC'}}>
                <Toolbar sx={{
                    display: 'flex',
                    marginTop: 2,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FFE5CC',
                    
                    }}>
                        <img src={networkingIcon} alt='networking'></img>

                        <div> 
                            <Button><a href='#skills' style={{color:'black', textDecoration: 'none'}}>Skills</a></Button>
                            <Button><a href='#about' style={{color:'black', textDecoration: 'none'}}>More About Me</a></Button>
                            <Button><a href='#projects' style={{color:'black', textDecoration: 'none'}}>Personal Projects</a></Button>
                        </div> 
                </Toolbar>
            </AppBar>
}
