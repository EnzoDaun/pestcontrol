export const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'contato@empresa.com'
};

// Validação das configurações (apenas em desenvolvimento)
if (import.meta.env.DEV) {
    const missingConfigs = [];
    if (!emailConfig.serviceId) missingConfigs.push('VITE_EMAILJS_SERVICE_ID');
    if (!emailConfig.templateId) missingConfigs.push('VITE_EMAILJS_TEMPLATE_ID');
    if (!emailConfig.publicKey) missingConfigs.push('VITE_EMAILJS_PUBLIC_KEY');

    if (missingConfigs.length > 0) {
        console.warn('⚠️ Configurações de email ausentes:', missingConfigs.join(', '));
        console.warn('Configure as variáveis no arquivo .env');
    }
}
