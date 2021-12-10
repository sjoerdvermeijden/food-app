import { CartComponent } from "../context/CartContext";
import { TotalComponent } from "../context/TotalContext";
import { HamburgerComponent } from "../context/HamburgerContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HamburgerComponent>
        <TotalComponent>
          <CartComponent>
            <Component {...pageProps} />
          </CartComponent>
        </TotalComponent>
      </HamburgerComponent>
    </>
  );
}

export default MyApp;
