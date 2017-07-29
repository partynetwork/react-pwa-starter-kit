import React from 'react'
import {ThemeProvider} from 'styled-components'

const defaultTheme = {
    primary: '#bf58be',
    success: '#00FF6D',
    warning: '#FECE00',
    error: '#e21f43',
    info: '#549fe2',

    // For `styled-component-breakpoint` number is start of screen resolution
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    },
};

// Create a GreenSection component that renders its children wrapped in
// a ThemeProvider with a green theme
const DefaultTheme = ({children}) =>
    <ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>

export {
    DefaultTheme
}
