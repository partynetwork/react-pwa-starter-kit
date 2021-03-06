import React from 'react'
import {Provider as ThemeProvider} from 'rebass'

const defaultTheme = {
    colors: {
        primary: '#bf58be',
        success: '#00FF6D',
        warning: '#FECE00',
        error: '#e21f43',
        info: '#549fe2',
    },

    breakpoints: [
        // min-width breakpoints in ems
        40, 52, 64
    ],
    space: [
        0, 6, 12, 18, 24, 30, 36
    ],
    fontSizes: [
        12, 16, 18, 24, 36, 48, 72
    ],
    weights: [
        400, 600
    ]
}

// Create a GreenSection component that renders its children wrapped in
// a ThemeProvider with a green theme
const DefaultTheme = ({children}) =>
    <ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>

export {
    DefaultTheme
}
