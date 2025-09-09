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
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import {Phone, Mail, MapPin, CheckCircle, AlertCircle} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig.js';

function Contact({darkMode}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);

        try {
            if (emailConfig.publicKey && emailConfig.publicKey !== 'your_public_key') {
                emailjs.init(emailConfig.publicKey);
            } else {
                console.warn('[EmailJS] publicKey ausente ou placeholder. Substitua em src\\frontend\\config\\emailConfig.js');
            }

            const recipientEmail = (emailConfig.toEmail && emailConfig.toEmail.trim() !== '')
                ? emailConfig.toEmail
                : 'enzoshimadadaun@gmail.com';

            const emailParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                service: formData.service || 'Não especificado',
                message: formData.message || 'Sem mensagem adicional',
                to_email: recipientEmail,
                to: recipientEmail,
                reply_to: formData.email || recipientEmail,
                user_name: formData.name,
                user_phone: formData.phone,
                user_service: formData.service || 'Não especificado',
                user_message: formData.message || 'Sem mensagem adicional'
            };

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                emailParams,
                emailConfig.publicKey
            );

            setDialogOpen(true);

            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
            });

        } catch (error) {
            console.error('Erro detalhado ao enviar email:', error);
            setSubmitError(true);
            setDialogOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}));
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSubmitError(false);
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
                                                '& .MuiInputBase-input': {
                                                    '&:-webkit-autofill': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                        transition: 'background-color 5000s ease-in-out 0s',
                                                    },
                                                    '&:-webkit-autofill:hover': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                    },
                                                    '&:-webkit-autofill:focus': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                    },
                                                    '&:-webkit-autofill:active': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
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
                                            placeholder="(16) 99999-9999"
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
                                                '& .MuiInputBase-input': {
                                                    '&:-webkit-autofill': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                        transition: 'background-color 5000s ease-in-out 0s',
                                                    },
                                                    '&:-webkit-autofill:hover': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                    },
                                                    '&:-webkit-autofill:focus': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                    },
                                                    '&:-webkit-autofill:active': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
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
                                                '& .MuiInputBase-input': {
                                                    '&:-webkit-autofill': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                        transition: 'background-color 5000s ease-in-out 0s',
                                                    },
                                                    '&:-webkit-autofill:hover': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                    },
                                                    '&:-webkit-autofill:focus': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
                                                    },
                                                    '&:-webkit-autofill:active': {
                                                        WebkitBoxShadow: `0 0 0 1000px ${darkMode ? '#1f2937' : '#ffffff'} inset`,
                                                        WebkitTextFillColor: darkMode ? '#ffffff' : '#111827',
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
                                        disabled={isSubmitting}
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
                                            '&:disabled': {
                                                bgcolor: '#9ca3af',
                                            },
                                            mt: 1
                                        }}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
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
                                            (16) 99709-0444
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                                        <Mail size={20} style={{color: '#16a34a'}}/>
                                        <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                            enzoshimadadaun@gmail.com
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'flex-start', gap: 1.5}}>
                                        <MapPin size={20} style={{color: '#16a34a', marginTop: '2px'}}/>
                                        <Box>
                                            <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                                Av. Antonio Fernandes Pinto, 280
                                            </Typography>
                                            <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                                Jaboticabal, SP
                                            </Typography>
                                        </Box>
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
                                        height: 256,
                                        width: '100%',
                                        minWidth: '280px',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
                                    }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9!2d-48.31!3d-21.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzAwLjAiUyA0OMKwMTgnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1639000000000!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Localização da Edson Controle de Pragas - Jaboticabal, SP"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Dialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    PaperProps={{
                        sx: {
                            bgcolor: darkMode ? '#1f2937' : '#ffffff',
                            border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                            borderRadius: 2,
                            minWidth: 320
                        }
                    }}
                >
                    <DialogTitle sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: darkMode ? '#ffffff' : '#111827',
                        pb: 1
                    }}>
                        {submitError ? (
                            <>
                                <AlertCircle size={24} style={{color: '#dc2626'}}/>
                                Erro no Envio
                            </>
                        ) : (
                            <>
                                <CheckCircle size={24} style={{color: '#16a34a'}}/>
                                Email Enviado com Sucesso!
                            </>
                        )}
                    </DialogTitle>
                    <DialogContent>
                        <Typography sx={{
                            color: darkMode ? '#d1d5db' : '#374151',
                            lineHeight: 1.6
                        }}>
                            {submitError ? (
                                <>
                                    Houve um problema ao enviar o email. Por favor, tente novamente ou entre em contato diretamente:
                                    <br/><br/>
                                    <strong>Telefone:</strong> (16) 99709-0444<br/>
                                    <strong>Email:</strong> enzoshimadadaun@gmail.com
                                </>
                            ) : (
                                'Sua solicitação foi enviada por email com sucesso! Entraremos em contato em breve para fornecer seu orçamento personalizado.'
                            )}
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{p: 3, pt: 1}}>
                        <Button
                            onClick={handleCloseDialog}
                            variant="contained"
                            sx={{
                                bgcolor: submitError ? '#dc2626' : '#16a34a',
                                color: 'white',
                                '&:hover': {bgcolor: submitError ? '#b91c1c' : '#15803d'},
                                textTransform: 'none',
                                px: 3
                            }}
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    );
}

export default Contact;
