import React from "react";

import { HeaderWrapper } from "./Style";
import Wrap from "../Wrap/Wrap";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Wrap>
          <div className="header-inner">
            <h1 className="logo">Good Burgers.</h1>
          </div>
        </Wrap>
      </HeaderWrapper>
    </>
  );
}

export default Header;
