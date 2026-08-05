function Hero() {
  return (
    <section className="hero" id="top">

      <div className="hero-content">

        <span className="hero-tag">
          Итальянская сыроварня • Свежие сыры для бизнеса
        </span>


        <h1>
          Итальянские сыры
          <br />
          для ресторанов
          <br />
          и пиццерий
        </h1>


        <p>
          Свежие итальянские сыры для ресторанов,
         пиццерий и профессиональной кухни.
         Производство Latteria1963 —
         стабильное качество, правильная технология
         и надёжные поставки для вашего бизнеса.
        </p>


        <div className="hero-buttons">


          <a
            href="#contacts"
            className="primary-button"
          >
            Получить условия поставки
          </a>



          <a
            href="#products"
            className="secondary-button"
          >
            Смотреть продукцию
          </a>


        </div>



        <div className="hero-trust">


          <strong>
          С 1963 года
         </strong>

         <span>
         Итальянские традиции сыроделия · свежая продукция · контроль каждой партии
         </span>


        </div>


      </div>




      <div className="hero-image">


  <div className="hero-image-card">

    <img
      src="/images/burrata.jpg"
      alt="Буррата Latteria1963"
      width="600"
      height="600"
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />


    <div className="hero-brand">

  Latteria1963

</div>


  </div>


</div>



    </section>
  );
}


export default Hero;
