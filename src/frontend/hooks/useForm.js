import { useState } from 'react';
import { formatPhoneBrazil, sanitizeInput } from '../utils/formatters';

/**
 * Hook para formulários com validação/formatação
 */
export const useForm = (initialValues = {}) => {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (field, value) => {
        let processedValue = value;

        if (field === 'phone') {
            processedValue = formatPhoneBrazil(value);
        }

        setFormData(prev => ({
            ...prev,
            [field]: processedValue
        }));
    };

    const reset = () => {
        setFormData(initialValues);
    };

    const getSanitizedData = () => {
        const sanitized = {};
        Object.keys(formData).forEach(key => {
            sanitized[key] = sanitizeInput(formData[key]);
        });
        return sanitized;
    };

    return {
        formData,
        handleChange,
        reset,
        getSanitizedData,
        setFormData
    };
};

/**
 * Hook dialogs
 */
export const useDialog = (initialOpen = false) => {
    const [open, setOpen] = useState(initialOpen);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);
    const toggleDialog = () => setOpen(prev => !prev);

    return {
        open,
        openDialog,
        closeDialog,
        toggleDialog
    };
};
