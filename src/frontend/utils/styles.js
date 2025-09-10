/**
 * Utilitários de estilos para componentes
 */

// Cores do tema
export const THEME_COLORS = {
    primary: '#16a34a',
    primaryHover: '#15803d',
    secondary: '#dc2626',
    secondaryHover: '#b91c1c',
    whatsapp: '#25d366',
    whatsappHover: '#128c7e',
    warning: '#fbbf24'
};

/**
 * estilos campos de formulário
 */
export const getFormFieldStyles = (darkMode) => ({
    '& .MuiOutlinedInput-root': {
        bgcolor: darkMode ? '#1f2937' : '#ffffff',
        color: darkMode ? '#ffffff' : '#111827',
        '& fieldset': {
            borderColor: darkMode ? '#4b5563' : '#d1d5db',
        },
        '&:hover fieldset': {
            borderColor: THEME_COLORS.primary,
        },
        '&.Mui-focused fieldset': {
            borderColor: THEME_COLORS.primary,
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
    '& .MuiSelect-icon': {
        color: darkMode ? '#9ca3af' : '#6b7280',
    },
});

/**
 * estilos labels formulário
 */
export const getFormLabelStyles = (darkMode) => ({
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 'medium',
    mb: 1,
    color: darkMode ? '#ffffff' : '#111827'
});

/**
 * estilos para Primary Button
 */
export const getPrimaryButtonStyles = (disabled = false) => ({
    bgcolor: disabled ? '#9ca3af' : THEME_COLORS.primary,
    color: 'white',
    textTransform: 'none',
    '&:hover': {
        bgcolor: disabled ? '#9ca3af' : THEME_COLORS.primaryHover,
    },
    '&:disabled': {
        bgcolor: '#9ca3af',
    },
});

/**
 * estilos botão WhatsApp
 */
export const getWhatsAppButtonStyles = (size = 'medium') => ({
    bgcolor: THEME_COLORS.whatsapp,
    color: 'white',
    '&:hover': {bgcolor: THEME_COLORS.whatsappHover},
    textTransform: 'none',
    borderRadius: '20px',
    ...(size === 'small' && {
        px: {xs: 0, sm: 2},
        fontSize: {xs: '0.5rem', sm: '0.875rem'},
        minWidth: {xs: '32px', sm: 'auto'},
        height: {xs: '32px', sm: 'auto'},
        '& .MuiButton-startIcon': {
            margin: {xs: 0, sm: '0 4px 0 0'}
        }
    })
});

/**
 * estilos titulos
 */
export const getSectionTitleStyles = (darkMode) => ({
    fontWeight: 'bold',
    mb: 2,
    fontSize: {xs: '2rem', md: '2.5rem'},
    color: darkMode ? '#ffffff' : '#111827'
});

/**
 * estilos subtitulos
 */
export const getSectionSubtitleStyles = (darkMode) => ({
    color: darkMode ? '#d1d5db' : '#6b7280',
    fontSize: {xs: '1rem', md: '1.125rem'}
});

/**
 * stilos cards de serviços
 */
export const getServiceCardStyles = (darkMode) => ({
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
});
