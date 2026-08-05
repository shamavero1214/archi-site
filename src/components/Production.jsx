function Production() {

  const steps = [

    {
      number: "01",
      title: "Качественное сырьё",
      text:
        "Выбираем ингредиенты и контролируем подготовку сырья для создания стабильного вкуса."
    },


    {
      number: "02",
      title: "Технология производства",
      text:
        "Создаём свежие итальянские сыры с использованием традиционных технологий сыроделия."
    },


    {
      number: "03",
      title: "Контроль качества",
      text:
        "Проверяем структуру, вкус и характеристики каждой партии перед отправкой партнёрам."
    },


    {
      number: "04",
      title: "Готовый продукт",
      text:
        "Свежие сыры отправляются в рестораны, пиццерии и магазины в удобных форматах."
    },


  ];



  return (

    <section className="production" id="production">


      <h2>
        Производство Latteria1963
      </h2>



       <p className="production-subtitle">
        Мы соединяем итальянские традиции сыроделия,
        современные технологии и контроль качества
       на каждом этапе производства.
       </p>



       <div className="production-image">

        <img
          src="/images/production.jpg"
          alt="Производство Latteria1963"
          width="720"
          height="1280"
          loading="lazy"
          decoding="async"
        />
        <div className="production-badge">

       <strong>
       Latteria1963
       </strong>

       <span>
       Свежие итальянские сыры для бизнеса
       </span>

</div>

      </div>




      <div className="production-grid">


        {steps.map((step)=>(


          <div
            className="production-card"
            key={step.number}
          >


            <span>
              {step.number}
            </span>


            <h3>
              {step.title}
            </h3>


            <p>
              {step.text}
            </p>


          </div>


        ))}


      </div>



    </section>

  );

}


export default Production;
