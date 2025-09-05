import React from 'react';
import {Container, Grid, Card, CardContent, Typography, Box, Avatar} from '@mui/material';
import {Star} from 'lucide-react';

function Testimonials({darkMode}) {
    const testimonials = [
        {
            name: "Maria Silva",
            role: "Proprietária de Restaurante",
            image: "/placeholder.svg?height=80&width=80",
            rating: 5,
            text: "Excelente serviço! A equipe da Edson resolveu nosso problema com formigas de forma rápida e eficiente. Recomendo!",
        },
        {
            name: "João Santos",
            role: "Síndico Residencial",
            image: "/placeholder.svg?height=80&width=80",
            rating: 5,
            text: "Contratamos para dedetização do condomínio. Profissionais competentes e preço justo. Muito satisfeito!",
        },
        {
            name: "Ana Costa",
            role: "Dona de Casa",
            image: "/placeholder.svg?height=80&width=80",
            rating: 5,
            text: "Serviço impecável! Acabaram com os cupins da minha casa e ainda deram garantia. Empresa de confiança!",
        },
    ];

    return (
        <Box sx={{
            py: 10,
            bgcolor: darkMode ? '#111827' : '#ffffff',
            marginTop: 0,
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
                        O Que Nossos Clientes Dizem
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: darkMode ? '#d1d5db' : '#6b7280',
                            fontSize: {xs: '1rem', md: '1.125rem'}
                        }}
                    >
                        Depoimentos reais de clientes satisfeitos com nossos serviços.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <Card
                                sx={{
                                    bgcolor: darkMode ? '#1f2937' : '#f9fafb',
                                    border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                                    height: '100%',
                                    maxWidth: 350,
                                    mx: 'auto',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                <CardContent sx={{p: 3, height: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                mr: 2,
                                                bgcolor: '#16a34a'
                                            }}
                                        >
                                            {testimonial.name.charAt(0)}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'semibold',
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{color: darkMode ? '#9ca3af' : '#6b7280'}}
                                            >
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{display: 'flex', mb: 3}}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} style={{color: '#fbbf24', fill: '#fbbf24'}}/>
                                        ))}
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: darkMode ? '#d1d5db' : '#374151',
                                            fontStyle: 'italic',
                                            lineHeight: 1.6,
                                            flexGrow: 1,
                                            fontSize: {xs: '0.95rem', md: '1rem'},
                                            textAlign: 'left'
                                        }}
                                    >
                                        "{testimonial.text}"
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

export default Testimonials;
