import React from 'react';
import {Container, Grid, Card, CardContent, Typography, Box} from '@mui/material';
import {Shield, Bug, Droplets, Zap, Home, Leaf, Eye, Waves} from 'lucide-react';

function Services({darkMode}) {
    const services = [
        {
            icon: <Shield size={32}/>,
            title: "Manejo Integrado de Pragas",
            description: "Estratégia completa e sustentável para controle eficaz de pragas.",
        },
        {
            icon: <Bug size={32}/>,
            title: "Desinsetização",
            description: "Eliminação segura de insetos com produtos certificados.",
        },
        {
            icon: <Droplets size={32}/>,
            title: "Sanitização",
            description: "Desinfecção completa de ambientes para sua proteção.",
        },
        {
            icon: <Zap size={32}/>,
            title: "Desratização",
            description: "Controle eficiente de roedores com métodos seguros.",
        },
        {
            icon: <Home size={32}/>,
            title: "Descupinização",
            description: "Proteção estrutural contra cupins e térmitas.",
        },
        {
            icon: <Leaf size={32}/>,
            title: "Expurgo",
            description: "Fumigação especializada para eliminação total de pragas.",
        },
        {
            icon: <Waves size={32}/>,
            title: "Imunização de Reservatórios",
            description: "Tratamento preventivo para caixas d'água e reservatórios.",
        },
        {
            icon: <Eye size={32}/>,
            title: "Controle Preventivo",
            description: "Monitoramento contínuo para prevenir infestações.",
        },
    ];

    return (
        <Box sx={{
            py: 10,
            bgcolor: darkMode ? '#1f2937' : '#f9fafb',
        }}>
            <Container maxWidth="xl">
                <Box sx={{textAlign: 'center', mb: 8}}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            fontSize: {xs: '2rem', md: '2.5rem'},
                            color: darkMode ? '#ffffff' : '#111827'
                        }}
                    >
                        Nossos Serviços
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: darkMode ? '#d1d5db' : '#6b7280',
                            maxWidth: '32rem',
                            mx: 'auto',
                            fontSize: {xs: '1rem', md: '1.125rem'}
                        }}
                    >
                        Oferecemos soluções completas para todos os tipos de pragas, sempre com segurança e eficiência.
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
                            <Card
                                sx={{
                                    width: '100%',
                                    minWidth: 240,
                                    maxWidth: 300,
                                    transition: 'all 0.3s ease',
                                    bgcolor: darkMode ? '#374151' : '#ffffff',
                                    color: darkMode ? '#ffffff' : '#111827',
                                    border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
                                    boxShadow: darkMode ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: darkMode
                                            ? '0 10px 25px -3px rgba(0, 0, 0, 0.3)'
                                            : '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
                                    }
                                }}
                            >
                                <CardContent sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{
                                        color: darkMode ? '#4ade80' : '#16a34a',
                                        mb: 2,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {service.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'semibold',
                                            mb: 2,
                                            fontSize: '1.1rem',
                                            color: darkMode ? '#ffffff' : '#111827',
                                            lineHeight: 1.3,
                                            minHeight: 48,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: darkMode ? '#d1d5db' : '#6b7280',
                                            lineHeight: 1.5,
                                            fontSize: '0.875rem',
                                            flexGrow: 1,
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Services;
