function Trust() {

  const items = [

    {
      number: "01",
      title: "С 1963 года",
      text:
        "История бренда основана на традициях итальянского сыроделия и внимании к качеству продукта."
    },


    {
      number: "02",
      title: "Контроль качества",
      text:
        "Проверяем каждый этап производства, чтобы каждая партия соответствовала стандартам Latteria1963."
    },


    {
      number: "03",
      title: "Свежие сыры",
      text:
        "Производим продукцию с сохранением натурального вкуса, текстуры и свежести."
    },


    {
      number: "04",
      title: "Партнёрство с бизнесом",
      text:
        "Работаем с ресторанами и пиццериями, обеспечивая стабильные поставки."
    },

  ];


  return (

    <section className="trust">


      <h2>
        Почему бизнес выбирает Latteria1963
      </h2>



      <p className="trust-subtitle">
        Качество продукта, стабильное производство
        и подход, ориентированный на профессиональную кухню.
      </p>



      <div className="trust-grid">


        {items.map((item)=>(


          <div
            className="trust-card"
            key={item.number}
          >


            <span>
              {item.number}
            </span>



            <h3>
              {item.title}
            </h3>



            <p>
              {item.text}
            </p>



          </div>


        ))}


      </div>


    </section>

  );

}


export default Trust;