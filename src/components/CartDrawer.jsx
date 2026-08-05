import { useEffect, useRef } from "react";
import { getQuantityError, MAX_QUANTITY_LENGTH } from "../utils/cart";

function CartDrawer({
  items,
  isOpen,
  focusProductId,
  onClose,
  onRemoveItem,
  onUpdateItem,
  onClearCart,
  onGoToContact,
}) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);
  const shouldRestoreFocusRef = useRef(true);
  const removeButtonRefs = useRef(new Map());

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !isOpen) {
      if (dialog?.open) {
        dialog.close();
      }

      return undefined;
    }

    openerRef.current = document.activeElement;
    shouldRestoreFocusRef.current = true;
    document.documentElement.classList.add("cart-is-open");
    document.body.classList.add("cart-is-open");
    if (!dialog.open) {
      dialog.showModal();
    }

    const focusFrame = window.requestAnimationFrame(() => {
      const quantityInput = focusProductId
        ? document.getElementById(`cart-quantity-${focusProductId}`)
        : null;

      if (quantityInput && dialog.contains(quantityInput)) {
        quantityInput.focus();
      } else {
        closeButtonRef.current?.focus();
      }
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);

      if (dialog.open) {
        dialog.close();
      }

      document.documentElement.classList.remove("cart-is-open");
      document.body.classList.remove("cart-is-open");

      const opener = openerRef.current;

      if (shouldRestoreFocusRef.current && opener?.isConnected) {
        window.requestAnimationFrame(() => opener.focus());
      }
    };
  }, [focusProductId, isOpen]);

  const closeDrawer = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }

    onClose();
  };

  const goToContact = () => {
    shouldRestoreFocusRef.current = false;

    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }

    onGoToContact();
  };

  const closeOnBackdrop = (event) => {
    if (event.target !== event.currentTarget || event.button !== 0) {
      return;
    }

    const drawerBounds = event.currentTarget.getBoundingClientRect();
    const isInsideDrawer =
      event.clientX >= drawerBounds.left &&
      event.clientX <= drawerBounds.right &&
      event.clientY >= drawerBounds.top &&
      event.clientY <= drawerBounds.bottom;

    if (!isInsideDrawer) {
      closeDrawer();
    }
  };

  const removeItem = (productId) => {
    const currentIndex = items.findIndex((item) => item.id === productId);
    const nextItem = items[currentIndex + 1] ?? items[currentIndex - 1];

    onRemoveItem(productId);

    window.requestAnimationFrame(() => {
      const nextRemoveButton = nextItem
        ? removeButtonRefs.current.get(nextItem.id)
        : null;
      (nextRemoveButton ?? closeButtonRef.current)?.focus();
    });
  };

  const clearCart = () => {
    onClearCart();
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
  };

  return (
    <dialog
      ref={dialogRef}
      id="cart-drawer"
      className="cart-drawer"
      aria-labelledby="cart-drawer-title"
      aria-modal="true"
      onCancel={(event) => {
        event.preventDefault();
        closeDrawer();
      }}
      onClick={closeOnBackdrop}
    >
      <div className="cart-drawer-header">
        <div>
          <span className="cart-drawer-kicker">B2B-заявка</span>
          <h2 id="cart-drawer-title">Корзина-заявка</h2>
          <p aria-live="polite">Выбрано позиций: {items.length}</p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          className="cart-drawer-close"
          aria-label="Закрыть корзину-заявку"
          onClick={closeDrawer}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="cart-drawer-body">
        <p className="cart-demo-notice">
          Выбранные позиции и демо-заявка не являются заказом. Стоимость,
          наличие, доставка и другие условия здесь не определяются.
        </p>

        {items.length > 0 ? (
          <ul className="cart-items">
            {items.map((item) => {
              const formatDescriptionId = `cart-format-${item.id}`;
              const quantityInputId = `cart-quantity-${item.id}`;
              const quantityErrorId = `cart-quantity-error-${item.id}`;
              const quantityError =
                focusProductId === item.id
                  ? getQuantityError(item.quantity)
                  : "";

              return (
                <li className="cart-item" key={item.id}>
                  <div className="cart-item-heading">
                    <div>
                      <h3>{item.name}</h3>
                      <p id={formatDescriptionId}>
                        Доступные форматы: {item.weight}
                      </p>
                    </div>

                    <button
                      ref={(button) => {
                        if (button) {
                          removeButtonRefs.current.set(item.id, button);
                        } else {
                          removeButtonRefs.current.delete(item.id);
                        }
                      }}
                      type="button"
                      className="cart-item-remove"
                      aria-label={`Удалить ${item.name} из заявки`}
                      onClick={() => removeItem(item.id)}
                    >
                      Удалить
                    </button>
                  </div>

                  <label htmlFor={quantityInputId}>Количество / объём</label>
                  <input
                    id={quantityInputId}
                    type="text"
                    value={item.quantity}
                    placeholder="Укажите нужное количество или объём"
                    aria-describedby={`${formatDescriptionId}${
                      quantityError ? ` ${quantityErrorId}` : ""
                    }`}
                    aria-invalid={quantityError ? "true" : undefined}
                    autoComplete="off"
                    maxLength={MAX_QUANTITY_LENGTH}
                    onChange={(event) =>
                      onUpdateItem(item.id, event.currentTarget.value)
                    }
                  />

                  {quantityError && (
                    <p
                      id={quantityErrorId}
                      className="cart-item-error"
                      role="alert"
                    >
                      {quantityError}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="cart-empty">
            <h3>Заявка пока пуста</h3>
            <p>Выберите нужные сыры в разделе «Продукция».</p>
          </div>
        )}
      </div>

      <div className="cart-drawer-actions">
        <button type="button" className="cart-continue" onClick={closeDrawer}>
          Продолжить выбор
        </button>
        <button
          type="button"
          className="cart-go-to-contact"
          disabled={items.length === 0}
          onClick={goToContact}
        >
          Перейти к заявке
        </button>
        <button
          type="button"
          className="cart-clear"
          disabled={items.length === 0}
          onClick={clearCart}
        >
          Очистить заявку
        </button>
      </div>
    </dialog>
  );
}

export default CartDrawer;
