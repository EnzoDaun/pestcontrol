import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Target, Eye, Heart } from 'lucide-react';
import { getSectionTitleStyles, getSectionSubtitleStyles } from '../utils/styles.js';

function WhoWeAre({ darkMode }) {
  const values = [
    {
      icon: <Heart size={48} />,
      title: "Missão",
      description: "Proteger a saúde, o bem-estar e o patrimônio dos clientes por meio de soluções eficazes, seguras e sustentáveis no controle de pragas urbanas, oferecendo atendimento personalizado e resultados de qualidade.",
    },
    {
      icon: <Eye size={48} />,
      title: "Visão",
      description: "Ser reconhecida em Jaboticabal e região como uma empresa que une conhecimento técnico, ética e cuidado humano, construindo relações de confiança e entregando resultados que superam as expectativas de cada cliente.",
    },
    {
      icon: <Target size={48} />,
      title: "Valores",
      description: "• Comprometimento: cumprir prazos e garantir a satisfação de cada cliente.\n• Responsabilidade: atuar com segurança, respeitando as pessoas, os animais e o meio ambiente.\n• Transparência: manter comunicação clara e honesta em todas as etapas do serviço.",
    },
  ];

  return (
    <>
      <Box sx={{
        py: 10,
        bgcolor: darkMode ? 'rgba(0, 0, 0, 0.1)' : '#ffffff',
        marginTop: 0,
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={getSectionTitleStyles(darkMode)}>
              Quem Somos
            </Typography>
            <Box sx={{ maxWidth: '900px', mx: 'auto', mt: 4 }}>
              <Typography variant="body1" sx={{
                color: darkMode ? '#d1d5db' : '#374151',
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                textAlign: 'justify',
                mb: 4
              }}>
                A Edson Controle de Pragas Urbanas nasceu do propósito de oferecer serviços de controle de pragas com excelência técnica, responsabilidade ambiental e atendimento humano.
              </Typography>
              <Typography variant="body1" sx={{
                color: darkMode ? '#d1d5db' : '#374151',
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                textAlign: 'justify',
                mb: 4
              }}>
                Fundada por Edson Cesar Pires, profissional com mais de uma década de experiência no setor, a empresa alia conhecimento técnico, comprometimento e tecnologia para garantir ambientes mais seguros, saudáveis e livres de pragas.
              </Typography>
              <Typography variant="body1" sx={{
                color: darkMode ? '#d1d5db' : '#374151',
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                textAlign: 'justify',
                mb: 4
              }}>
                Com atuação em Jaboticabal e região, prestamos serviços a residências, comércios e indústrias, sempre com foco na segurança, eficiência e bem-estar das pessoas.
              </Typography>
              <Typography variant="body1" sx={{
                color: darkMode ? '#d1d5db' : '#374151',
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                textAlign: 'justify',
                mb: 4
              }}>
                Nosso trabalho é pautado pela transparência, pelo respeito aos clientes e pela busca constante de soluções inovadoras e sustentáveis.
              </Typography>
              <Typography variant="body1" sx={{
                color: darkMode ? '#d1d5db' : '#374151',
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                textAlign: 'justify',
                fontWeight: 'medium'
              }}>
                Mais do que eliminar pragas, nossa missão é proteger o patrimônio e a saúde, promovendo tranquilidade e confiança a cada atendimento.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{
        py: 10,
        bgcolor: darkMode ? 'rgba(22, 163, 74, 0.1)' : '#f0fdf4',
        marginTop: 0,
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={getSectionTitleStyles(darkMode)}>
              Nossos Pilares
            </Typography>
            <Typography variant="h6" sx={{
              ...getSectionSubtitleStyles(darkMode),
              maxWidth: '32rem',
              mx: 'auto'
            }}>
              Os valores que norteiam nosso trabalho e nossa relação com os clientes.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 4 },
              alignItems: 'flex-start',
              justifyContent: 'center',
              maxWidth: '1200px',
              mx: 'auto'
            }}
          >
            {values.map((value, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: { xs: 'none', md: '1' },
                  width: { xs: '100%', md: 'auto' },
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
                  {value.icon}
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
                  {value.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? '#d1d5db' : '#6b7280',
                    lineHeight: 1.6,
                    textAlign: value.title === 'Valores' ? 'left' : 'center',
                    fontSize: { xs: '1rem', md: '1rem' },
                    whiteSpace: value.title === 'Valores' ? 'pre-line' : 'normal'
                  }}
                >
                  {value.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default WhoWeAre;