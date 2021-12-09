import { CartComponent } from "../context/CartContext";
import { TotalComponent } from "../context/TotalContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TotalComponent>
        <CartComponent>
          <Component {...pageProps} />
        </CartComponent>
      </TotalComponent>
    </>
  );
}

export default MyApp;
