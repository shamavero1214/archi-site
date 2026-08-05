function Features() {

  const items = [

    {
      number: "01",
      title: "Свежий продукт",
      text:
        "Производим свежие сыры с натуральным вкусом, нежной текстурой и правильными характеристиками для кухни.",
    },


    {
      number: "02",
      title: "Стабильный результат",
      text:
        "Каждая партия проходит контроль, чтобы шефы получали одинаковое качество продукта.",
    },


    {
      number: "03",
      title: "Форматы для бизнеса",
      text:
        "Подбираем удобные форматы продукции для ресторанов, пиццерий и профессиональной кухни.",
    },


    {
      number: "04",
      title: "Удобство поставок",
      text:
        "Помогаем бизнесу получать необходимый объём продукции без перебоев.",
    },

  ];


  return (
    <section className="features">


      <h2>
        Преимущества Latteria1963
      </h2>



      <div className="features-grid">


        {items.map((item) => (


          <div
            className="feature-card"
            key={item.number}
          >


            <div className="feature-number">
              {item.number}
            </div>



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


export default Features;