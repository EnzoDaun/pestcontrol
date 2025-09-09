import React from 'react';
import {Box, Container, Typography, Button} from '@mui/material';
import bgTestImage from '../../assets/bgtest.jpg';
import edsonLogo from '../../assets/edsoncontroledepragas.png';

function Hero({scrollToContact}) {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                pt: {xs: 10, md: 0}
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${bgTestImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Box sx={{position: 'absolute', inset: 0, bgcolor: 'rgba(0, 0, 0, 0.4)'}}/>

            <Container maxWidth="xl" sx={{position: 'relative', zIndex: 10, px: 2, height: '100%'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    alignItems: 'center',
                    justifyContent: {xs: 'flex-start', md: 'center'},
                    height: '100%',
                    gap: {xs: 3, md: 4},
                    py: {xs: 4, md: 0}
                }}>
                    {/* Coluna do texto - Esquerda (Desktop) / Topo (Mobile) */}
                    <Box sx={{
                        flex: {xs: 'none', md: '1'},
                        width: {xs: '100%', md: '50%'},
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: {xs: 2, md: 3},
                        order: {xs: 1, md: 1}
                    }}>
                        <Box sx={{
                            textAlign: {xs: 'center', md: 'left'},
                            width: '100%',
                            maxWidth: 'none'
                        }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: {xs: 2, md: 1.8},
                                    fontSize: {xs: '1.6rem', md: '2.6rem', lg: '3rem'},
                                    lineHeight: {xs: 1.1, md: 0.95},
                                    letterSpacing: '-0.025em',
                                    whiteSpace: {md: 'nowrap'}
                                }}
                            >
                                Proteção Completa Contra Pragas
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'white',
                                    mb: {xs: 0, md: 3},
                                    opacity: 0.9,
                                    fontSize: {xs: '1rem', md: '1.15rem'},
                                    lineHeight: {xs: 1.4, md: 1.25},
                                    fontWeight: 400
                                }}
                            >
                                Controle profissional de pragas com garantia e eficiência.
                            </Typography>

                            <Button
                                onClick={scrollToContact}
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: '#16a34a',
                                    color: 'white',
                                    px: 4,
                                    py: 2,
                                    fontSize: {xs: '1rem', md: '1.125rem'},
                                    fontWeight: 'semibold',
                                    borderRadius: '9999px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    display: {xs: 'none', md: 'inline-flex'},
                                    '&:hover': {
                                        bgcolor: '#15803d',
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                        transform: 'translateY(-1px)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Solicite um Orçamento
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{
                        flex: {xs: 'none', md: '1'},
                        width: {xs: '100%', md: '50%'},
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: {xs: '200px', md: 'auto'},
                        order: {xs: 2, md: 2}
                    }}>
                        <Box
                            component="img"
                            src={edsonLogo}
                            alt="Edson Controle de Pragas - Logo"
                            sx={{
                                maxWidth: '100%',
                                width: {xs: '70%', md: '90%'},
                                height: 'auto',
                                maxHeight: {xs: '200px', md: '400px', lg: '450px'},
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 15px 35px rgba(255, 255, 255, 0.8))',
                                opacity: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    filter: 'drop-shadow(0 20px 40px rgba(255, 255, 255, 0.9))'
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{
                        width: '100%',
                        display: {xs: 'flex', md: 'none'},
                        justifyContent: 'center',
                        px: 2,
                        order: {xs: 3, md: 3}
                    }}>
                        <Button
                            onClick={scrollToContact}
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#16a34a',
                                color: 'white',
                                px: 4,
                                py: 1,
                                fontSize: '1rem',
                                fontWeight: 'semibold',
                                borderRadius: '9999px',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                minWidth: '200px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    bgcolor: '#15803d',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                    transform: 'translateY(-1px)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Solicitar orçamento
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;