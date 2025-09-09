import React, {useEffect} from 'react';
import {Box, Container, Typography, IconButton} from '@mui/material';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import team from '../../assets/team.png';
import eco from '../../assets/eco.png';
import satisfaction from '../../assets/satisfaction.png';
import approve from '../../assets/approve.png';

function Carousel({currentSlide, setCurrentSlide, darkMode}) {
    const slides = [
        {
            title: "Equipe Qualificada e Certificada",
            description: "Profissionais treinados e certificados pelos órgãos competentes para garantir a máxima eficiência.",
            image: team,
        },
        {
            title: "Produtos Eco-friendly e Seguros",
            description: "Utilizamos apenas produtos aprovados pela ANVISA, seguros para sua família e pets.",
            image: eco,
        },
        {
            title: "Garantia de Satisfação",
            description: "Garantimos a eficácia do serviço ou realizamos nova aplicação sem custo adicional.",
            image: satisfaction,
        },
        {
            title: "Depoimentos de Clientes",
            description: "Mais de 1000 clientes satisfeitos com avaliação 5 estrelas em nossos serviços.",
            image: approve,
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [setCurrentSlide, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <Box sx={{
            py: 10,
            bgcolor: darkMode ? '#111827' : '#ffffff',
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
                        Por Que Confiar na Edson?
                    </Typography>
                </Box>

                <Box sx={{position: 'relative', maxWidth: '56rem', mx: 'auto'}}>
                    <Box
                        sx={{
                            overflow: 'hidden',
                            borderRadius: 2,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            mx: {xs: 0, md: 6}
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                transition: 'transform 0.5s ease-in-out',
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {slides.map((slide, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '100%',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: {xs: 'column', md: 'row'},
                                            alignItems: 'center',
                                            gap: 4,
                                            p: {xs: 3, md: 4},
                                            bgcolor: darkMode ? '#1f2937' : '#f9fafb',
                                            minHeight: '300px',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                flex: {xs: 'none', md: '1'},
                                                width: {xs: '100%', md: '50%'},
                                                textAlign: {xs: 'center', md: 'left'},
                                                pr: {md: 3}
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    mb: 2,
                                                    fontSize: {xs: '1.4rem', md: '1.75rem'},
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {slide.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    color: darkMode ? '#d1d5db' : '#6b7280',
                                                    fontSize: {xs: '0.95rem', md: '1rem'}
                                                }}
                                            >
                                                {slide.description}
                                            </Typography>
                                        </Box>

                                        <Box
                                            sx={{
                                                flex: {xs: 'none', md: '1'},
                                                width: {xs: '100%', md: '50%'},
                                                display: 'flex',
                                                justifyContent: {xs: 'center', md: 'flex-end'},
                                                pl: {md: 3}
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={slide.image}
                                                alt={slide.title}
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: '250px',
                                                    height: '200px',
                                                    objectFit: 'cover',
                                                    borderRadius: 2,
                                                }}
                                                onError={(e) => {
                                                    e.target.style.backgroundColor = darkMode ? '#374151' : '#e5e7eb';
                                                    e.target.style.display = 'flex';
                                                    e.target.style.alignItems = 'center';
                                                    e.target.style.justifyContent = 'center';
                                                    e.target.style.color = darkMode ? '#9ca3af' : '#6b7280';
                                                    e.target.innerHTML = 'Imagem em breve';
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <IconButton
                        onClick={prevSlide}
                        sx={{
                            position: 'absolute',
                            left: {xs: '1rem', md: '0.5rem'},
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                            color: darkMode ? '#ffffff' : '#111827',
                            width: 40,
                            height: 40,
                            '&:hover': {
                                bgcolor: darkMode ? '#1f2937' : '#ffffff',
                            },
                            boxShadow: 2,
                        }}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={16}/>
                    </IconButton>

                    <IconButton
                        onClick={nextSlide}
                        sx={{
                            position: 'absolute',
                            right: {xs: '1rem', md: '0.5rem'},
                            top: '50%',
                            transform: 'translateY(-50%)',
                            bgcolor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                            color: darkMode ? '#ffffff' : '#111827',
                            width: 40,
                            height: 40,
                            '&:hover': {
                                bgcolor: darkMode ? '#1f2937' : '#ffffff',
                            },
                            boxShadow: 2,
                        }}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={16}/>
                    </IconButton>

                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, gap: 0.5}}>
                        {slides.map((_, index) => (
                            <Box
                                key={index}
                                component="button"
                                onClick={() => setCurrentSlide(index)}
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease',
                                    bgcolor: index === currentSlide
                                        ? '#16a34a'
                                        : darkMode ? '#4b5563' : '#d1d5db',
                                    '&:hover': {
                                        bgcolor: '#16a34a'
                                    }
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Carousel;
