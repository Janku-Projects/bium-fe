import { Body, Footer, Header, Wrapper } from "../App.styled";
import React, { FC, ReactNode } from "react";

interface layoutProps {
    children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    return (
        <Wrapper>
            <Header>
                Header Section
            </Header>
            <Body>
                {children}
            </Body>
            <Footer>
                Footer Section
            </Footer>
        </Wrapper>
    );
};

export default Layout;
