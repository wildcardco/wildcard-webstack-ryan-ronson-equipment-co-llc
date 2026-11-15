import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { About } from "./pages/About.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Catalog } from "./pages/Catalog.jsx";
import { Checkout, CheckoutConfirmation } from "./pages/Checkout.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Home } from "./pages/Home.jsx";
import { Locations } from "./pages/Locations.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Services } from "./pages/Services.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:category" element={<Catalog />} />
        <Route path="catalog/:category/:slug" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/confirmation" element={<CheckoutConfirmation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="locations" element={<Locations />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
