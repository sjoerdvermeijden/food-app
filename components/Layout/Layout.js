import React from "react";

import { GlobalStyle } from "../Styles/GlobalStyle";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>;
}

export default Layout;
