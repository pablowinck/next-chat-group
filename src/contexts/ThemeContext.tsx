import { createContext, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from 'styles/theme/dark';
import light from 'styles/theme/light';

type Theme = {
    name: string;
    theme: DefaultTheme;
};

type ThemeContextType = {
    selectedTheme: string;
    setSelectedTheme: (value: string) => void;
    themes: Theme[];
};

const ThemeContext = createContext({} as ThemeContextType);

const ThemeContextProvider: React.FC = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState('dark');
    const themes = [
        {
            name: 'dark',
            theme: dark
        },
        {
            name: 'light',
            theme: light
        }
    ];

    const value: ThemeContextType = {
        selectedTheme: selectedTheme,
        setSelectedTheme: setSelectedTheme,
        themes: themes
    };

    return (
        <ThemeProvider
            theme={themes.find((theme) => theme.name === selectedTheme)?.theme}
        >
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            'useThemeContext must be used within a ThemeContextProvider'
        );
    }
    return context;
};

export default ThemeContextProvider;
