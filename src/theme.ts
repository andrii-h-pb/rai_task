'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    '&.Mui-focused': {
                        backgroundColor: 'transparent',
                    },
                    '&::before': {
                        content: 'none',
                    },
                    '&::after': {
                        content: 'none',
                    },
                    '&:hover': {
                        backgroundColor: 'transparent',
                    }
                },
                select: {
                    padding: '6px 16px',
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    },
});

export default theme;
