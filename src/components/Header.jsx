import { useEffect, useRef } from "react";

const navigationItems = [
  { href: "#products", label: "Продукция" },
  { href: "#production", label: "Производство" },
  { href: "#about", label: "О компании" },
  { href: "#partners", label: "Для бизнеса" },
];

function Header({
  cartCount,
  isCartOpen,
  isMenuOpen,
  onOpenCart,
  onCloseMenu,
  onToggleMenu,
}) {
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onCloseMenu();
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen, onCloseMenu]);

  const openCart = () => {
    onOpenCart();
  };

  return (
    <header className="header">
      <a
        href="#top"
        className="logo"
        aria-label="Latteria1963 — в начало страницы"
        onClick={onCloseMenu}
      >
        Latteria1963
      </a>

      <nav
        id="site-navigation"
        className={`site-nav${isMenuOpen ? " is-open" : ""}`}
        aria-label="Основная навигация"
      >
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onCloseMenu}>
            {item.label}
          </a>
        ))}

        <a href="#contacts" className="header-button" onClick={onCloseMenu}>
          Стать партнёром
        </a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="cart-toggle"
          aria-haspopup="dialog"
          aria-controls="cart-drawer"
          aria-expanded={isCartOpen}
          aria-label={`Корзина-заявка, выбрано позиций: ${cartCount}`}
          onClick={openCart}
        >
          <span>Заявка</span>
          <span className="cart-toggle-count" aria-hidden="true">
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        </button>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={onToggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Header;
