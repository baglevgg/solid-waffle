"use client";

import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function NavigationWrapper() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        if (window.gtag) {
            window.gtag('event', 'theme_toggle', {
                'event_category': 'Engagement',
                'event_label': isDarkTheme ? 'to_light' : 'to_dark'
            });
        }
    };

    return <Navigation isDark={isDarkTheme} toggleTheme={toggleTheme} />;
}
