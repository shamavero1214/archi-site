import { useState } from "react";
import { getQuantityError } from "../utils/cart";

function Contact({ selectedItems, onOpenCart }) {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const showPreview = (event) => {
    event.preventDefault();

    if (selectedItems.length === 0) {
      setIsPreviewVisible(false);
      setStatusMessage("Сначала выберите хотя бы один продукт.");
      onOpenCart();
      return;
    }

    const itemWithQuantityError = selectedItems
      .map((item) => ({ item, error: getQuantityError(item.quantity) }))
      .find(({ error }) => error);

    if (itemWithQuantityError) {
      setIsPreviewVisible(false);
      setStatusMessage(
        `${itemWithQuantityError.error} Позиция: «${itemWithQuantityError.item.name}».`,
      );
      onOpenCart(itemWithQuantityError.item.id);
      return;
    }

    setIsPreviewVisible(true);
    setStatusMessage(
      "Состав сформирован локально в демонстрационном режиме. Данные никуда не отправлены.",
    );
  };

  return (
    <section className="contact" id="contacts">
      <h2 id="contact-heading" tabIndex="-1">
        Демонстрация заявки
      </h2>

      <p>
        Выберите продукты и посмотрите, как мог бы выглядеть итоговый состав
        заявки без отправки данных.
      </p>

      <div className="contact-benefits" aria-label="Преимущества сотрудничества">
        <span>
          <span aria-hidden="true">🧀</span> Свежие итальянские сыры
        </span>
        <span>
          <span aria-hidden="true">🛒</span> Рабочая корзина
        </span>
        <span>
          <span aria-hidden="true">🔒</span> Без передачи данных
        </span>
      </div>

      <form onSubmit={showPreview}>
        <p className="demo-order-notice">
          Выбранные позиции и демо-заявка не являются заказом. Стоимость,
          наличие, доставка и другие условия здесь не определяются.
        </p>

        <div
          className="contact-selection"
          aria-labelledby="contact-selection-title"
        >
          <div className="contact-selection-heading">
            <h3 id="contact-selection-title">Выбранные позиции</h3>
            <button
              type="button"
              className="contact-selection-button"
              onClick={onOpenCart}
            >
              {selectedItems.length > 0 ? "Изменить" : "Выбрать сыры"}
            </button>
          </div>

          {selectedItems.length > 0 ? (
            <ul className="contact-selection-list">
              {selectedItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <strong
                    className={item.quantity.trim() ? undefined : "is-missing"}
                  >
                    {item.quantity.trim() || "Количество / объём не указано"}
                  </strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Позиции из корзины ещё не выбраны. Добавьте продукты из раздела
              «Продукция».
            </p>
          )}
        </div>

        <div className="demo-form-fields" aria-label="Отключённые поля формы">
          <div className="demo-form-heading">
            <h3>Контактные данные</h3>
            <span>Отключено в демоверсии</span>
          </div>
          <p>
            Поля имени, телефона, компании, города, типа бизнеса и комментария
            недоступны. Сайт не запрашивает и не сохраняет персональные данные.
          </p>
          <div className="demo-form-field-list" aria-hidden="true">
            <span>Имя — ввод отключён</span>
            <span>Телефон — ввод отключён</span>
            <span>Компания и город — ввод отключён</span>
            <span>Комментарий — ввод отключён</span>
          </div>
        </div>

        <button
          type="submit"
          aria-controls="demo-request-preview"
          aria-expanded={isPreviewVisible}
        >
          Посмотреть состав демо-заявки
        </button>

        <p className="form-status" role="status" aria-live="polite">
          {statusMessage}
        </p>

        {isPreviewVisible && selectedItems.length > 0 && (
          <section
            className="demo-request-preview"
            id="demo-request-preview"
            aria-labelledby="demo-request-preview-title"
          >
            <span>Локальный просмотр</span>
            <h3 id="demo-request-preview-title">Состав демо-заявки</h3>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong>
                  <span>{item.quantity.trim()}</span>
                </li>
              ))}
            </ul>
            <p>
              Это не заказ. Состав показан только в вашем браузере и никуда не
              отправлен.
            </p>
          </section>
        )}
      </form>
    </section>
  );
}

export default Contact;
