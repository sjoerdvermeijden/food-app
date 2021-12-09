import React from "react";

import { HeaderWrapper } from "./Style";
import Wrap from "../Wrap/Wrap";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Wrap>
          <div className="header-inner">
            <p className="logo">Lorem, ipsum dolor.</p>
          </div>
        </Wrap>
      </HeaderWrapper>
    </>
  );
}

export default Header;
