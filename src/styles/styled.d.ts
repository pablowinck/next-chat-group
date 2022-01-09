import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            text: string;
            primary: {
                main: string;
                dark: string;
                light: string;
            };
            secondary: string;
            background: {
                100: string;
                200: string;
                300: string;
                400: string;
                800: string;
            };
            red: {
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
            error: string;
            success: string;
            warning: string;
            info: string;
        };
    }
}
