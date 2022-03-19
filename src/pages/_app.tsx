import Toaster from 'components/Toast';
import MenuContextProvider from 'contexts/MenuContext';
import ThemeContextProvider from 'contexts/ThemeContext';
import UserContextProvider from 'contexts/UserContext';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyle from '../styles/global';

const client = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnMount: false,
         refetchOnWindowFocus: false
      }
   }
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   const [load, setLoad] = useState(true);

   useEffect(() => {
      setLoad(false);
   }, []);

   if (load) return <h1>loading...</h1>;

   return (
      <QueryClientProvider client={client}>
         <ThemeContextProvider>
            <UserContextProvider>
               <MenuContextProvider>
                  <GlobalStyle />
                  <Component {...pageProps} />
                  <Toaster />
                  {/* <ReactQueryDevtools /> */}
               </MenuContextProvider>
            </UserContextProvider>
         </ThemeContextProvider>
      </QueryClientProvider>
   );
};

export default MyApp;
