import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Clock, FileText, Shield } from 'lucide-react';

function WhyChooseUs({ darkMode }) {
  const features = [
    {
      icon: <Clock size={48} />,
      title: "Atendimento 24h",
      description: "Emergências não esperam. Estamos disponíveis 24 horas por dia para atender suas necessidades.",
    },
    {
      icon: <FileText size={48} />,
      title: "Preços Transparentes",
      description: "Orçamentos claros e detalhados, sem surpresas ou custos ocultos no final do serviço.",
    },
    {
      icon: <Shield size={48} />,
      title: "Laudo Técnico Incluso",
      description: "Relatório completo do serviço realizado com recomendações para prevenção futura.",
    },
  ];

  return (
    <Box sx={{
      py: 10,
      bgcolor: darkMode ? 'rgba(22, 163, 74, 0.1)' : '#f0fdf4',
      marginTop: 0,
    }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: darkMode ? '#ffffff' : '#111827'
            }}
          >
            Por Que Escolher a Edson?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: darkMode ? '#d1d5db' : '#6b7280',
              maxWidth: '32rem',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Nosso compromisso é oferecer o melhor serviço com total transparência e confiabilidade.
          </Typography>
        </Box>

        {/* Usando flexbox com direction column no mobile para forçar um item por linha */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column no mobile, row no desktop
            gap: { xs: 4, md: 4 },
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: { xs: 'none', md: '1' }, // No flex no mobile, flex igual no desktop
                width: { xs: '100%', md: 'auto' }, // Width 100% no mobile
                maxWidth: { xs: '400px', md: '320px' },
                px: { xs: 4, md: 2 },
                py: { xs: 4, md: 0 },
                mx: 'auto'
              }}
            >
              <Box sx={{
                color: darkMode ? '#4ade80' : '#16a34a',
                mb: 3,
                display: 'flex',
                justifyContent: 'center'
              }}>
                {feature.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'semibold',
                  mb: 2,
                  color: darkMode ? '#ffffff' : '#111827',
                  fontSize: { xs: '1.5rem', md: '1.5rem' }
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? '#d1d5db' : '#6b7280',
                  lineHeight: 1.6,
                  textAlign: 'center',
                  fontSize: { xs: '1rem', md: '1rem' }
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;