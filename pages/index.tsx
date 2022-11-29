import Head from 'next/head';
import Header from './Header';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { darkTheme, defaultUserContext } from './types';
import { UserContext, userReducer } from './userContext';
import Footer from './Footer';
import { SnackbarProvider } from 'notistack';
import Main from './Main';
import { useReducer } from 'react';

export default () => {
  const [userState, userDispatch] = useReducer(userReducer, defaultUserContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider maxSnack={1}>
        <UserContext.Provider
          value={{ state: userState, dispatch: userDispatch }}
        >
          <div>
            <Head>
              <title>Service Level Up</title>
              <meta name="description" content="Service Level Up (SLU)" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <Header />
            <Main />
            <Footer />
          </div>
        </UserContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
