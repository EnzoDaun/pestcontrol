import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import {Bug} from 'lucide-react';

function Footer() {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para controle de pragas.');
        window.open(`https://wa.me/5516997090444?text=${message}`, '_blank');
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
                                href="https://www.facebook.com/edson.cesarpires?locale=pt_BR"
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
                                href="https://www.instagram.com/edsoncpires?utm_source=ig_web_button_share_sheet&igsh=MXRoZmd5NDVoaWZsZw=="
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
                            <Typography sx={{color: '#d1d5db'}}>Desinsetização</Typography>
                            <Typography sx={{color: '#d1d5db'}}>Desratização</Typography>
                            <Typography sx={{color: '#d1d5db'}}>Descupinização</Typography>
                            <Typography sx={{color: '#d1d5db'}}>Sanitização</Typography>
                            <Typography sx={{color: '#d1d5db'}}>Controle Preventivo</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{fontWeight: 'semibold', mb: 2}}>
                            Contato
                        </Typography>
                        <Box sx={{'& > div': {mb: 1}}}>
                            <Typography sx={{color: '#d1d5db'}}>Av. Antonio Fernandes Pinto, 280</Typography>
                            <Typography sx={{color: '#d1d5db'}}>Bairro Xis - Jaboticabal, SP</Typography>
                            <Typography sx={{color: '#d1d5db'}}>CEP 14870-807</Typography>
                            <Typography sx={{color: '#d1d5db'}}>(16) 99709-0444</Typography>
                            <Typography sx={{color: '#d1d5db'}}>enzoshimadadaun@gmail.com</Typography>
                            <Typography sx={{color: '#d1d5db'}}>CNPJ: 59.224.809/0001-40</Typography>
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
