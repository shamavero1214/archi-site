export const CART_STORAGE_KEY = "latteria1963-cart-v1";
export const MAX_QUANTITY_LENGTH = 120;

const CART_DATA_VERSION = 1;

export const sanitizeQuantity = (value) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[\r\n\t]+/g, " ").slice(0, MAX_QUANTITY_LENGTH);
};

export const getQuantityError = (value) => {
  const quantity = sanitizeQuantity(value).trim();

  if (!quantity) {
    return "Укажите количество / объём.";
  }

  if (!/[\p{L}\p{N}]/u.test(quantity)) {
    return "Укажите количество или объём словами или цифрами.";
  }

  if (/^[+−\-\d\s.,/]+$/u.test(quantity)) {
    const normalizedNumber = quantity
      .replace(/\s+/g, "")
      .replace("−", "-")
      .replace(",", ".");

    if (!/^[+-]?\d+(?:\.\d+)?$/.test(normalizedNumber)) {
      return "Уточните количество / объём словами или одним числом.";
    }

    return Number(normalizedNumber) > 0
      ? ""
      : "Количество / объём должно быть больше нуля.";
  }

  const numericQuantity = quantity.match(
    /^([+−-]?\s*\d+(?:[.,]\d+)?)\s*(?:[\p{L}].*)?$/u,
  );

  if (
    numericQuantity &&
    Number(
      numericQuantity[1]
        .replace(/\s+/g, "")
        .replace("−", "-")
        .replace(",", "."),
    ) <= 0
  ) {
    return "Количество / объём должно быть больше нуля.";
  }

  return "";
};

export const readStoredCart = (validProductIds) => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);

    if (
      parsedValue?.version !== CART_DATA_VERSION ||
      !Array.isArray(parsedValue.items)
    ) {
      return [];
    }

    const seenProductIds = new Set();

    return parsedValue.items.reduce((cartItems, item) => {
      if (
        !item ||
        typeof item.productId !== "string" ||
        !validProductIds.has(item.productId) ||
        seenProductIds.has(item.productId)
      ) {
        return cartItems;
      }

      seenProductIds.add(item.productId);
      cartItems.push({
        productId: item.productId,
        quantity: sanitizeQuantity(item.quantity),
      });

      return cartItems;
    }, []);
  } catch {
    return [];
  }
};

export const storeCart = (cartItems) => {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const items = cartItems.map((item) => ({
      productId: item.productId,
      quantity: sanitizeQuantity(item.quantity),
    }));

    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({ version: CART_DATA_VERSION, items }),
    );

    return true;
  } catch {
    return false;
  }
};

const sanitizeMessageLine = (value) =>
  typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";

export const buildTelegramMessage = ({
  company,
  phone,
  city,
  business,
  positions,
  comment,
}) => {
  const positionLines = positions.map(
    (position) =>
      `• ${sanitizeMessageLine(position.name)} — ${sanitizeMessageLine(
        position.quantity,
      )}`,
  );

  return [
    "Новая заявка с сайта Latteria1963",
    "",
    `Компания: ${sanitizeMessageLine(company)}`,
    `Телефон: ${sanitizeMessageLine(phone)}`,
    `Город: ${sanitizeMessageLine(city)}`,
    `Тип бизнеса: ${sanitizeMessageLine(business)}`,
    "",
    "Выбранные позиции:",
    ...positionLines,
    "",
    `Комментарий: ${sanitizeMessageLine(comment) || "Не указан"}`,
  ].join("\n");
};
