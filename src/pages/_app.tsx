import ThemeContextProvider from 'contexts/ThemeContext';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeContextProvider>
    );
};

export default MyApp;
