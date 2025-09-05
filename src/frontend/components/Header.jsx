import React from 'react';
import {AppBar, Toolbar, Container, Box, Typography, Button} from '@mui/material';
import {Bug, Phone, Moon, Sun} from 'lucide-react';

function Header({darkMode, toggleTheme}) {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                bgcolor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                zIndex: 50
            }}
        >
            <Toolbar sx={{px: 0, py: 2}}>
                <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Bug size={32} style={{color: '#16a34a'}}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: darkMode ? 'white' : 'black',
                                fontSize: {xs: '1.1rem', sm: '1.25rem'}
                            }}
                        >
                            Edson Controle de Pragas
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Button
                            component="a"
                            href="tel:+5511999999999"
                            sx={{
                                color: '#16a34a',
                                display: {xs: 'none', sm: 'flex'},
                                alignItems: 'center',
                                gap: 0.5,
                                '&:hover': {color: '#15803d'},
                                textTransform: 'none'
                            }}
                            startIcon={<Phone size={16}/>}
                        >
                            (11) 99999-9999
                        </Button>
                        <Button
                            onClick={toggleTheme}
                            variant="text"
                            size="small"
                            sx={{
                                color: darkMode ? 'white' : 'black',
                                p: 1,
                                minWidth: 'auto'
                            }}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun size={16}/> : <Moon size={16}/>}
                        </Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
