import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import {Bug} from 'lucide-react';
import {createWhatsAppUrl} from '../utils/formatters.js';
import {CONTACT_INFO, SERVICES_LIST, DEFAULT_WHATSAPP_MESSAGE} from '../constants/data.js';

function Footer() {
    const handleWhatsAppClick = () => {
        const url = createWhatsAppUrl(CONTACT_INFO.whatsappNumber, DEFAULT_WHATSAPP_MESSAGE);
        window.open(url, '_blank');
    };

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#111827',
                color: 'white',
                py: 6
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mb: 2}}>
                            <Bug size={32} style={{color: '#16a34a'}}/>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                                Edson Controle de Pragas
                            </Typography>
                        </Box>
                        <Typography sx={{color: '#d1d5db', mb: 2}}>
                            Proteção profissional contra pragas com segurança e eficiência garantidas.
                        </Typography>
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Typography
                                component="a"
                                href={CONTACT_INFO.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: '#d1d5db',
                                    textDecoration: 'none',
                                    '&:hover': {color: '#16a34a'},
                                    transition: 'color 0.3s'
                                }}
                            >
                                Facebook
                            </Typography>
                            <Typography
                                component="a"
                                href={CONTACT_INFO.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: '#d1d5db',
                                    textDecoration: 'none',
                                    '&:hover': {color: '#16a34a'},
                                    transition: 'color 0.3s'
                                }}
                            >
                                Instagram
                            </Typography>
                            <Typography
                                component="a"
                                onClick={handleWhatsAppClick}
                                sx={{
                                    color: '#d1d5db',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    '&:hover': {color: '#16a34a'},
                                    transition: 'color 0.3s'
                                }}
                            >
                                WhatsApp
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{fontWeight: 'semibold', mb: 2}}>
                            Serviços
                        </Typography>
                        <Box sx={{'& > div': {mb: 1}}}>
                            {SERVICES_LIST.map((service, index) => (
                                <Typography key={index} sx={{color: '#d1d5db'}}>{service}</Typography>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{fontWeight: 'semibold', mb: 2}}>
                            Contato
                        </Typography>
                        <Box sx={{'& > div': {mb: 1}}}>
                            <Typography sx={{color: '#d1d5db'}}>{CONTACT_INFO.address.street}</Typography>
                            <Typography
                                sx={{color: '#d1d5db'}}>{CONTACT_INFO.address.neighborhood} - {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}</Typography>
                            <Typography sx={{color: '#d1d5db'}}>CEP {CONTACT_INFO.address.zipCode}</Typography>
                            <Typography sx={{color: '#d1d5db'}}>{CONTACT_INFO.phone}</Typography>
                            <Typography sx={{color: '#d1d5db'}}>{CONTACT_INFO.email}</Typography>
                            <Typography sx={{color: '#d1d5db'}}>CNPJ: {CONTACT_INFO.cnpj}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{
                    borderTop: '1px solid #374151',
                    mt: 4,
                    pt: 4,
                    textAlign: 'center'
                }}>
                    <Typography sx={{color: '#9ca3af'}}>
                        &copy; {new Date().getFullYear()} Edson Controle de Pragas. Todos os direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
