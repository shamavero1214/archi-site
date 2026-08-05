import { products } from "../data/products";

function Products({ selectedProductIds, onAddItem, onOpenCart }) {
  return (
    <section className="products" id="products">
      <h2>Наша продукция</h2>

      <p className="products-subtitle">
        Свежие итальянские сыры для профессиональной кухни, ресторанов,
        пиццерий и партнёров Latteria1963.
      </p>

      <div className="products-grid">
        {products.map((product) => {
          const isSelected = selectedProductIds.has(product.id);

          return (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="product-info">
                <span className="product-weight">{product.weight}</span>

                <h3>{product.name}</h3>
                <span className="product-target">{product.target}</span>

                <p>{product.description}</p>

                <div className="product-actions">
                  <button
                    type="button"
                    className={`product-cart-button${
                      isSelected ? " is-selected" : ""
                    }`}
                    aria-pressed={isSelected}
                    aria-label={
                      isSelected
                        ? `${product.name} уже добавлен в заявку. Открыть корзину-заявку`
                        : `Добавить ${product.name} в заявку`
                    }
                    onClick={() =>
                      isSelected ? onOpenCart() : onAddItem(product.id)
                    }
                  >
                    {isSelected ? "Добавлено в заявку" : "Добавить в заявку"}
                  </button>

                  <a
                    href="#contacts"
                    className="product-button"
                    onClick={() => onAddItem(product.id)}
                  >
                    Получить условия поставки
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
