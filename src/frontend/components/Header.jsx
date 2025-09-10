import React from 'react';
import {AppBar, Toolbar, Container, Box, Typography, Button} from '@mui/material';
import {Bug, Moon, Sun, MessageCircle} from 'lucide-react';
import {createWhatsAppUrl} from '../utils/formatters.js';
import {CONTACT_INFO, DEFAULT_WHATSAPP_MESSAGE} from '../constants/data.js';
import {getWhatsAppButtonStyles} from '../utils/styles.js';

function Header({darkMode, toggleTheme}) {
    const handleWhatsAppClick = () => {
        const url = createWhatsAppUrl(CONTACT_INFO.whatsappNumber, DEFAULT_WHATSAPP_MESSAGE);
        window.open(url, '_blank');
    };

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
                                fontSize: {xs: '0.8rem', sm: '1.25rem'}
                            }}
                        >
                            Edson Controle de Pragas
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: {xs: 1, sm: 2}}}>
                        <Button
                            onClick={handleWhatsAppClick}
                            variant="contained"
                            size="small"
                            sx={getWhatsAppButtonStyles('small')}
                            startIcon={<MessageCircle size={16}/>}
                        >
                            <Box sx={{display: {xs: 'none', sm: 'block'}}}>WhatsApp</Box>
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
