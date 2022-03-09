import MenuContextProvider from 'contexts/MenuContext';
import ThemeContextProvider from 'contexts/ThemeContext';
import UserContextProvider from 'contexts/UserContext';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   const queryClient = new QueryClient();
   const [load, setLoad] = useState(true);

   useEffect(() => {
      setLoad(false);
   }, []);

   if (load) return <h1>loading...</h1>;

   return (
      <QueryClientProvider client={queryClient}>
         <ThemeContextProvider>
            <UserContextProvider>
               <MenuContextProvider>
                  <GlobalStyle />
                  <Component {...pageProps} />
               </MenuContextProvider>
            </UserContextProvider>
         </ThemeContextProvider>
      </QueryClientProvider>
   );
};

export default MyApp;
