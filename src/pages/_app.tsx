import MenuContextProvider from 'contexts/MenuContext';
import ThemeContextProvider from 'contexts/ThemeContext';
import UserContextProvider from 'contexts/UserContext';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <MenuContextProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </MenuContextProvider>
            </UserContextProvider>
        </ThemeContextProvider>
    );
};

export default MyApp;
