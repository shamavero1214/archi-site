function Footer({ isLegalPage = false }) {
  const homePrefix = isLegalPage ? "?" : "";

  return (

    <footer className="footer">


      <div className="footer-brand">

        <h3>
          Latteria1963
        </h3>


        <p>
          Свежие итальянские сыры для ресторанов,
          пиццерий и профессиональной кухни.
        </p>


      </div>




      <nav aria-label="Навигация в подвале">

        <h4>
          Навигация
        </h4>


        <a href={`${homePrefix}#products`}>
          Продукция
        </a>


        <a href={`${homePrefix}#about`}>
          О компании
        </a>


        <a href={`${homePrefix}#production`}>
          Производство
        </a>


        <a href={`${homePrefix}#contacts`}>
          О проекте
        </a>


      </nav>





      <div>

        <h4>
          Для бизнеса
        </h4>


        <p>
          Пиццерии
        </p>


        <p>
          Рестораны
        </p>


        <p>
          Магазины
        </p>


      </div>





      <div>

        <h4>
          Контакты
        </h4>


        <p>
          Демонстрационный проект
        </p>


        <p>
          Портфолио разработчика
        </p>


        <p>
          <a href="?page=legal">Правовая информация</a>
        </p>


      </div>





      <div className="footer-bottom">

        Latteria1963 — демонстрационный проект для портфолио разработчика.

      </div>



    </footer>

  );

}


export default Footer;
