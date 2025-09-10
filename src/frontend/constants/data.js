/**
 * Constantes e dados estáticos da aplicação
 */

export const CONTACT_INFO = {
    phone: '(16) 99709-0444',
    whatsappNumber: '5516997090444',
    email: 'edsoncontroledepragas@gmail.com',
    address: {
        street: 'Av. Antonio Fernandes Pinto, 280',
        neighborhood: 'Bairro Xis',
        city: 'Jaboticabal',
        state: 'SP',
        zipCode: '14870-807'
    },
    cnpj: '59.224.809/0001-40',
    socialMedia: {
        facebook: 'https://www.facebook.com/edson.cesarpires?locale=pt_BR',
        instagram: 'https://www.instagram.com/edsoncpires?utm_source=ig_web_button_share_sheet&igsh=MXRoZmd5NDVoaWZsZw=='
    }
};

// Opções de serviços para o formulário
export const SERVICE_OPTIONS = [
    {value: '', label: 'Selecione um serviço'},
    {value: 'desinsetizacao', label: 'Desinsetização'},
    {value: 'desratizacao', label: 'Desratização'},
    {value: 'descupinizacao', label: 'Descupinização'},
    {value: 'sanitizacao', label: 'Sanitização'},
    {value: 'expurgo', label: 'Expurgo'},
    {value: 'imunizacao', label: 'Imunização de Reservatórios'},
    {value: 'preventivo', label: 'Controle Preventivo'},
    {value: 'outros', label: 'Outros'}
];

// Lista de serviços para exibição
export const SERVICES_LIST = [
    'Desinsetização',
    'Desratização',
    'Descupinização',
    'Sanitização',
    'Controle Preventivo'
];

// Mensagem padrão do WhatsApp
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Gostaria de solicitar um orçamento para controle de pragas.';

// Configuração do mapa
export const MAP_CONFIG = {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9!2d-48.31!3d-21.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzAwLjAiUyA0OMKwMTgnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1639000000000!5m2!1spt-BR!2sbr",
    title: "Localização da Edson Controle de Pragas - Jaboticabal, SP"
};
