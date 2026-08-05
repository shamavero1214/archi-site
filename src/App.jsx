import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import About from "./components/About";
import Production from "./components/Production";
import Trust from "./components/Trust";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import LegalInfo from "./components/LegalInfo";
import { products } from "./data/products";
import { readStoredCart, sanitizeQuantity, storeCart } from "./utils/cart";

const productById = new Map(products.map((product) => [product.id, product]));
const validProductIds = new Set(productById.keys());

function DemoNotice() {
  return (
    <aside className="demo-notice" aria-label="Статус сайта">
      <strong>Демонстрационный проект — портфолио разработчика</strong>
      <a href="?page=legal">Правовая информация</a>
    </aside>
  );
}

function App() {
  const [cartItems, setCartItems] = useState(() =>
    readStoredCart(validProductIds),
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartFocusProductId, setCartFocusProductId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    storeCart(cartItems);
  }, [cartItems]);

  const addItem = useCallback((productId) => {
    if (!productById.has(productId)) {
      return;
    }

    setCartItems((currentItems) => {
      if (currentItems.some((item) => item.productId === productId)) {
        return currentItems;
      }

      return [...currentItems, { productId, quantity: "" }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId),
    );
  }, []);

  const updateItem = useCallback((productId, quantity) => {
    if (!productById.has(productId)) {
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: sanitizeQuantity(quantity) }
          : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);
  const openCart = useCallback((focusProductId) => {
    setIsMenuOpen(false);
    setCartFocusProductId(
      typeof focusProductId === "string" ? focusProductId : null,
    );
    setIsCartOpen(true);
  }, []);
  const closeCart = useCallback(() => {
    setIsCartOpen(false);
    setCartFocusProductId(null);
  }, []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(
    () => setIsMenuOpen((currentValue) => !currentValue),
    [],
  );

  const goToContact = useCallback(() => {
    setIsCartOpen(false);
    setCartFocusProductId(null);

    window.requestAnimationFrame(() => {
      const contactHeading = document.getElementById("contact-heading");
      contactHeading?.scrollIntoView({ block: "start" });
      contactHeading?.focus({ preventScroll: true });
    });
  }, []);

  const selectedItems = useMemo(
    () =>
      cartItems.flatMap((cartItem) => {
        const product = productById.get(cartItem.productId);

        return product ? [{ ...product, quantity: cartItem.quantity }] : [];
      }),
    [cartItems],
  );

  const selectedProductIds = useMemo(
    () => new Set(cartItems.map((item) => item.productId)),
    [cartItems],
  );

  const isLegalPage =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("page") === "legal";

  if (isLegalPage) {
    return (
      <>
        <a className="skip-link" href="#main-content">
          Перейти к основному содержимому
        </a>
        <DemoNotice />
        <main id="main-content" className="legal-page">
          <LegalInfo />
        </main>
        <Footer isLegalPage />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к основному содержимому
      </a>

      <DemoNotice />

      <Header
        cartCount={selectedItems.length}
        isCartOpen={isCartOpen}
        isMenuOpen={isMenuOpen}
        onOpenCart={openCart}
        onCloseMenu={closeMenu}
        onToggleMenu={toggleMenu}
      />

      <main id="main-content">
        <Hero />

        <Products
          selectedProductIds={selectedProductIds}
          onAddItem={addItem}
          onOpenCart={openCart}
        />

        <Features />

        <About />

        <Production />

        <Trust />

        <Partners />

        <Contact selectedItems={selectedItems} onOpenCart={openCart} />
      </main>

      <Footer />

      <CartDrawer
        items={selectedItems}
        isOpen={isCartOpen}
        focusProductId={cartFocusProductId}
        onClose={closeCart}
        onRemoveItem={removeItem}
        onUpdateItem={updateItem}
        onClearCart={clearCart}
        onGoToContact={goToContact}
      />
    </>
  );
}

export default App;
