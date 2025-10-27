import React from 'react';
import {Container, Grid, Card, CardContent, Typography, Box} from '@mui/material';
import { getSectionTitleStyles, getSectionSubtitleStyles, getServiceCardStyles } from '../utils/styles.js';
import manejoImg from '../../assets/manejo.png';
import desinsetizacaoImg from '../../assets/desinsetizacao.png';
import sanitizacaoImg from '../../assets/sanitizacao.png';
import ratoImg from '../../assets/rato.png';
import cupimImg from '../../assets/cupim.png';
import expurgoImg from '../../assets/expurgo.png';
import aguaImg from '../../assets/agua.png';
import controleImg from '../../assets/controle.png';

function Services({darkMode}) {
    const services = [
        {
            icon: <img src={manejoImg} alt="Manejo Integrado" style={{width: 44, height: 44}} />,
            title: "Manejo Integrado de Pragas",
            description: "Estratégia completa e sustentável para controle eficaz de pragas.",
        },
        {
            icon: <img src={desinsetizacaoImg} alt="Desinsetização" style={{width: 44, height: 44}} />,
            title: "Desinsetização",
            description: "Eliminação segura de insetos com produtos certificados.",
        },
        {
            icon: <img src={sanitizacaoImg} alt="Sanitização" style={{width: 44, height: 44}} />,
            title: "Sanitização",
            description: "Desinfecção completa de ambientes para sua proteção.",
        },
        {
            icon: <img src={ratoImg} alt="Desratização" style={{width: 44, height: 44}} />,
            title: "Desratização",
            description: "Controle eficiente de roedores com métodos seguros.",
        },
        {
            icon: <img src={cupimImg} alt="Descupinização" style={{width: 44, height: 44}} />,
            title: "Descupinização",
            description: "Proteção estrutural contra cupins e térmitas.",
        },
        {
            icon: <img src={expurgoImg} alt="Expurgo" style={{width: 44, height: 44}} />,
            title: "Expurgo",
            description: "Fumigação especializada para eliminação total de pragas.",
        },
        {
            icon: <img src={aguaImg} alt="Imunização de Reservatórios" style={{width: 44, height: 44}} />,
            title: "Imunização de Reservatórios",
            description: "Tratamento preventivo para caixas d'água e reservatórios.",
        },
        {
            icon: <img src={controleImg} alt="Controle Preventivo" style={{width: 44, height: 44}} />,
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
                    <Typography variant="h2" sx={getSectionTitleStyles(darkMode)}>
                        Nossos Serviços
                    </Typography>
                    <Typography variant="h6" sx={{
                        ...getSectionSubtitleStyles(darkMode),
                        maxWidth: '32rem',
                        mx: 'auto'
                    }}>
                        Oferecemos soluções completas para todos os tipos de pragas, sempre com segurança e eficiência.
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
                            <Card sx={getServiceCardStyles(darkMode)}>
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
                                        mb: 0,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {service.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'semibold',
                                            mb: 0,
                                            mt: 2,
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
                                            alignItems: 'center',
                                            mt: 1
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
