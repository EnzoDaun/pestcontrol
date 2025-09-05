import React from 'react';
import {Box, Container, Typography, Button} from '@mui/material';
import bgTestImage from '../../assets/bgtest.jpg';

function Hero({scrollToContact}) {
    return (<Box
            component="section"
            sx={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${bgTestImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <Box sx={{position: 'absolute', inset: 0, bgcolor: 'rgba(0, 0, 0, 0.4)'}}/>
            <Container sx={{position: 'relative', zIndex: 10, textAlign: 'center', px: 2}}>
                <Box sx={{maxWidth: '64rem', mx: 'auto'}}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 3,
                            fontSize: {xs: '2.5rem', md: '4rem', lg: '5rem'},
                            lineHeight: 1.1
                        }}
                    >
                        Proteção Completa Contra Pragas
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            textAlign: 'center',
                            px: {xs: 3, lg: 6},
                            mb: 4,
                            opacity: 0.9,
                            fontSize: {xs: '1.25rem', md: '1.5rem'}
                        }}
                    >
                        Soluções profissionais para sua saúde e segurança.
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
            </Container>
        </Box>);
}

export default Hero;
