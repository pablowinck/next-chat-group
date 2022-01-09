import ThemeContextProvider from 'contexts/ThemeContext';
import UserContextProvider from 'contexts/UserContext';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </UserContextProvider>
        </ThemeContextProvider>
    );
};

export default MyApp;
