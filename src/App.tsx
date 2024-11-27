import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import { Header, Body, Footer, Wrapper } from './App.styled';
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";


const App: React.FC = () => {

    return (
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>

                            <Wrapper>
                                <Header>
                                    Header Section
                                </Header>
                                <Body>
                                    This is the body content.
                                </Body>
                                <Footer>
                                    Footer Section
                                </Footer>
                            </Wrapper>
                        </PersistGate>
                    </Provider>
                </ThemeProvider>
            </BrowserRouter>
        </SnackbarProvider>
    );
};

export default App;
