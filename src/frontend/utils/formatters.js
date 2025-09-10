/**
 * Utilitários de formatação
 */

export const formatPhoneBrazil = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .replace(/javascript:/gi, '')
        .trim()
        .substring(0, 1000);
};

export const createWhatsAppUrl = (phone, message = '') => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
};
