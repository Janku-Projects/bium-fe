import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import { Header, Body, Footer, Wrapper } from './App.styled';
import { theme } from "./styles/theme";


const App: React.FC = () => {

    return (
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
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
                </ThemeProvider>
            </BrowserRouter>
        </SnackbarProvider>
    );
};

export default App;
