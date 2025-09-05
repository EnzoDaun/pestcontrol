import React, {useState, useEffect} from 'react';
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Box,
} from '@mui/material';

import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

import '../Styles/App.css';
import Carousel from "./Carousel.jsx";

export default function EdsonPestControl() {
    const [darkMode, setDarkMode] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#16a34a',
            },
            secondary: {
                main: '#dc2626',
            },
            success: {
                main: '#16a34a',
            },
            background: {
                default: darkMode ? '#111827' : '#ffffff',
                paper: darkMode ? '#1f2937' : '#ffffff',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#111827',
                secondary: darkMode ? '#d1d5db' : '#6b7280',
            }
        },
        typography: {
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{minHeight: '100vh'}}>
                <Header darkMode={darkMode} toggleTheme={toggleTheme}/>
                <Hero scrollToContact={scrollToContact}/>
                <Services darkMode={darkMode}/>
                <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} darkMode={darkMode}/>
                <WhyChooseUs darkMode={darkMode}/>
                <Testimonials darkMode={darkMode}/>
                <Contact darkMode={darkMode}/>
                <Footer darkMode={darkMode}/>
            </Box>
        </ThemeProvider>
    );
}
