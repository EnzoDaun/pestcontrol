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
import {emailConfig} from '../config/emailConfig.js';
import { useForm, useDialog } from '../hooks/useForm.js';
import { CONTACT_INFO, SERVICE_OPTIONS, MAP_CONFIG } from '../constants/data.js';
import {
    getFormFieldStyles,
    getFormLabelStyles,
    getPrimaryButtonStyles,
    getSectionTitleStyles,
    getSectionSubtitleStyles
} from '../utils/styles.js';

function Contact({darkMode}) {
    const { formData, handleChange, reset, getSanitizedData } = useForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const { open: dialogOpen, openDialog, closeDialog } = useDialog();
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
                : CONTACT_INFO.email;

            const sanitizedData = getSanitizedData();

            const emailParams = {
                from_name: sanitizedData.name,
                from_email: sanitizedData.email,
                phone: sanitizedData.phone,
                service: sanitizedData.service || 'Não especificado',
                message: sanitizedData.message || 'Sem mensagem adicional',
                to_email: recipientEmail,
                to: recipientEmail,
                reply_to: sanitizedData.email || recipientEmail,
                user_name: sanitizedData.name,
                user_phone: sanitizedData.phone,
                user_service: sanitizedData.service || 'Não especificado',
                user_message: sanitizedData.message || 'Sem mensagem adicional'
            };

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                emailParams,
                emailConfig.publicKey
            );

            openDialog();
            reset();

        } catch (error) {
            console.error('Erro detalhado ao enviar email:', error);
            setSubmitError(true);
            openDialog();
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseDialog = () => {
        closeDialog();
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
                    <Typography variant="h2" sx={getSectionTitleStyles(darkMode)}>
                        Entre em Contato
                    </Typography>
                    <Typography variant="h6" sx={getSectionSubtitleStyles(darkMode)}>
                        Solicite seu orçamento gratuito e proteja seu ambiente hoje mesmo.
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{width: '100%'}}>
                    <Grid
                        item
                        xs={12}
                        lg={8}
                        sx={{
                            width: {xs: '100%', lg: '62%'},
                            maxWidth: {xs: '100%', lg: '62%'},
                            flexBasis: {xs: '100%', lg: '62%'}
                        }}
                    >
                        <Card
                            sx={{
                                bgcolor: darkMode ? '#374151' : '#ffffff',
                                border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
                                width: '100%'
                            }}
                        >
                            <CardContent sx={{p: 3}}>
                                <Box component="form" onSubmit={handleSubmit}
                                     sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    <Box>
                                        <Typography component="label" htmlFor="name" sx={getFormLabelStyles(darkMode)}>
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
                                            sx={getFormFieldStyles(darkMode)}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography component="label" htmlFor="phone" sx={getFormLabelStyles(darkMode)}>
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
                                            sx={getFormFieldStyles(darkMode)}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography component="label" htmlFor="email" sx={getFormLabelStyles(darkMode)}>
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
                                            sx={getFormFieldStyles(darkMode)}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography component="label" htmlFor="service" sx={getFormLabelStyles(darkMode)}>
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
                                            sx={getFormFieldStyles(darkMode)}
                                        >
                                            {SERVICE_OPTIONS.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Box>

                                    <Box>
                                        <Typography component="label" htmlFor="message" sx={getFormLabelStyles(darkMode)}>
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
                                            sx={getFormFieldStyles(darkMode)}
                                        />
                                    </Box>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        disabled={isSubmitting}
                                        sx={{
                                            ...getPrimaryButtonStyles(isSubmitting),
                                            py: 1.5,
                                            fontSize: '1.125rem',
                                            fontWeight: 'semibold',
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
                            width: {xs: '100%', lg: '34%'},
                            maxWidth: {xs: '100%', lg: '34%'},
                            flexBasis: {xs: '100%', lg: '34%'}
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
                                            {CONTACT_INFO.phone}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                                        <Mail size={20} style={{color: '#16a34a'}}/>
                                        <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                            {CONTACT_INFO.email}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'flex-start', gap: 1.5}}>
                                        <MapPin size={20} style={{color: '#16a34a', marginTop: '2px'}}/>
                                        <Box>
                                            <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                                {CONTACT_INFO.address.street}
                                            </Typography>
                                            <Typography sx={{color: darkMode ? '#d1d5db' : '#374151'}}>
                                                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}
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
                                        src={MAP_CONFIG.embedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={MAP_CONFIG.title}
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
                                    Houve um problema ao enviar o email. Por favor, tente novamente ou entre em contato
                                    diretamente:
                                    <br/><br/>
                                    <strong>Telefone:</strong> {CONTACT_INFO.phone}<br/>
                                    <strong>Email:</strong> {CONTACT_INFO.email}
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
