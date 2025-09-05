import React, {useState} from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Box,
    MenuItem
} from '@mui/material';
import {Phone, Mail, MapPin} from 'lucide-react';

function Contact({darkMode}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Obrigado! Entraremos em contato em breve.");
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}));
    };

    return (
        <Box
            id="contact"
            sx={{
                py: 10,
                bgcolor: darkMode ? '#1f2937' : '#f9fafb',
                marginTop: 0,
            }}
        >
            <Container>
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
                        Entre em Contato
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: darkMode ? '#d1d5db' : '#6b7280',
                            fontSize: {xs: '1rem', md: '1.125rem'}
                        }}
                    >
                        Solicite seu orçamento gratuito e proteja seu ambiente hoje mesmo.
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ width: '100%' }}>
                    <Grid
                        item
                        xs={12}
                        lg={8}
                        sx={{
                            width: { xs: '100%', lg: '62%' },
                            maxWidth: { xs: '100%', lg: '62%' },
                            flexBasis: { xs: '100%', lg: '62%' }
                        }}
                    >
                        <Card
                            sx={{
                                bgcolor: darkMode ? '#374151' : '#ffffff',
                                border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
                                width: '100%'
                            }}
                        >
                            <CardContent sx={{p: 3}} >
                                <Box component="form" onSubmit={handleSubmit}
                                     sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    <Box>
                                        <Typography
                                            component="label"
                                            htmlFor="name"
                                            sx={{
                                                display: 'block',
                                                fontSize: '0.875rem',
                                                fontWeight: 'medium',
                                                mb: 1,
                                                color: darkMode ? '#ffffff' : '#111827'
                                            }}
                                        >
                                            Nome *
                                        </Typography>
                                        <TextField
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                            required
                                            fullWidth
                                            placeholder="Seu nome completo"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: darkMode ? '#1f2937' : '#ffffff',
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    '& fieldset': {
                                                        borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                                    opacity: 1,
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            component="label"
                                            htmlFor="phone"
                                            sx={{
                                                display: 'block',
                                                fontSize: '0.875rem',
                                                fontWeight: 'medium',
                                                mb: 1,
                                                color: darkMode ? '#ffffff' : '#111827'
                                            }}
                                        >
                                            Telefone *
                                        </Typography>
                                        <TextField
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                            required
                                            fullWidth
                                            placeholder="(11) 99999-9999"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: darkMode ? '#1f2937' : '#ffffff',
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    '& fieldset': {
                                                        borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                                    opacity: 1,
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            component="label"
                                            htmlFor="email"
                                            sx={{
                                                display: 'block',
                                                fontSize: '0.875rem',
                                                fontWeight: 'medium',
                                                mb: 1,
                                                color: darkMode ? '#ffffff' : '#111827'
                                            }}
                                        >
                                            E-mail *
                                        </Typography>
                                        <TextField
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            required
                                            fullWidth
                                            placeholder="seu@email.com"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: darkMode ? '#1f2937' : '#ffffff',
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    '& fieldset': {
                                                        borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                                    opacity: 1,
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            component="label"
                                            htmlFor="service"
                                            sx={{
                                                display: 'block',
                                                fontSize: '0.875rem',
                                                fontWeight: 'medium',
                                                mb: 1,
                                                color: darkMode ? '#ffffff' : '#111827'
                                            }}
                                        >
                                            Serviço Desejado
                                        </Typography>
                                        <TextField
                                            select
                                            id="service"
                                            value={formData.service}
                                            onChange={(e) => handleChange("service", e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                            displayEmpty
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: darkMode ? '#1f2937' : '#ffffff',
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    '& fieldset': {
                                                        borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                },
                                                '& .MuiSelect-icon': {
                                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                                },
                                            }}
                                        >
                                            <MenuItem value="">Selecione um serviço</MenuItem>
                                            <MenuItem value="desinsetizacao">Desinsetização</MenuItem>
                                            <MenuItem value="desratizacao">Desratização</MenuItem>
                                            <MenuItem value="descupinizacao">Descupinização</MenuItem>
                                            <MenuItem value="sanitizacao">Sanitização</MenuItem>
                                            <MenuItem value="expurgo">Expurgo</MenuItem>
                                            <MenuItem value="imunizacao">Imunização de Reservatórios</MenuItem>
                                            <MenuItem value="preventivo">Controle Preventivo</MenuItem>
                                            <MenuItem value="outros">Outros</MenuItem>
                                        </TextField>
                                    </Box>

                                    <Box>
                                        <Typography
                                            component="label"
                                            htmlFor="message"
                                            sx={{
                                                display: 'block',
                                                fontSize: '0.875rem',
                                                fontWeight: 'medium',
                                                mb: 1,
                                                color: darkMode ? '#ffffff' : '#111827'
                                            }}
                                        >
                                            Mensagem
                                        </Typography>
                                        <TextField
                                            id="message"
                                            multiline
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            fullWidth
                                            placeholder="Descreva sua necessidade ou dúvida..."
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: darkMode ? '#1f2937' : '#ffffff',
                                                    color: darkMode ? '#ffffff' : '#111827',
                                                    '& fieldset': {
                                                        borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#16a34a',
                                                    },
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                                    opacity: 1,
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#16a34a',
                                            color: 'white',
                                            py: 1.5,
                                            fontSize: '1.125rem',
                                            fontWeight: 'semibold',
                                            textTransform: 'none',
                                            '&:hover': {
                                                bgcolor: '#15803d',
                                            },
                                            mt: 1
                                        }}
                                    >
                                        Enviar Solicitação
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        lg={4}
                        sx={{
                            width: { xs: '100%', lg: '34%' },
                            maxWidth: { xs: '100%', lg: '34%' },
                            flexBasis: { xs: '100%', lg: '34%' }
                        }}
                    >
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 'semibold',
                                        mb: 2,
                                        color: darkMode ? '#ffffff' : '#111827'
                                    }}
                                >
                                    Informações de Contato
                                </Typography>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                                        <Phone size={20} style={{color: '#16a34a'}}/>
                                        <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                            (11) 99999-9999
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                                        <Mail size={20} style={{color: '#16a34a'}}/>
                                        <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                            contato@edsonpragas.com.br
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                                        <MapPin size={20} style={{color: '#16a34a'}}/>
                                        <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                            Rua das Flores, 123 - São Paulo, SP
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 'semibold',
                                        mb: 2,
                                        color: darkMode ? '#ffffff' : '#111827'
                                    }}
                                >
                                    Localização
                                </Typography>
                                <Box
                                    sx={{
                                        bgcolor: darkMode ? '#4b5563' : '#e5e7eb',
                                        height: 256,
                                        width: '100%',
                                        minWidth: '280px',
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Typography sx={{color: darkMode ? '#d1d5db' : '#6b7280'}}>
                                        Mapa interativo aqui
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;
