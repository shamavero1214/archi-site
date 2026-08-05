function Partners() {

  const partners = [

    {
      icon: "🍕",
      title: "Пиццерии",
      text:
        "Моцарелла для пиццы с правильным плавлением, стабильной влажностью и предсказуемым результатом в каждой партии.",
    },


    {
      icon: "👨‍🍳",
      title: "Рестораны",
      text:
        "Буррата, страчателла и свежие сыры для современной итальянской кухни, красивой подачи и премиального меню.",
    },


    {
      icon: "🏪",
      title: "Магазины",
      text:
        "Свежая продукция с сильной историей бренда, понятным ассортиментом и высоким качеством для покупателей.",
    },

  ];


  return (

    <section className="partners" id="partners">


      <h2>
        Для кого работают сыры Latteria1963
      </h2>



      <p className="partners-subtitle">
        Мы создаём продукты под задачи профессиональной кухни:
        от пиццерий до ресторанов и торговых партнёров.
      </p>




      <div className="partners-grid">


        {partners.map((partner) => (


          <div
            className="partner-card"
            key={partner.title}
          >


            <div className="partner-icon" aria-hidden="true">
              {partner.icon}
            </div>



            <h3>
              {partner.title}
            </h3>



            <p>
              {partner.text}
            </p>



          </div>


        ))}


      </div>


    </section>

  );

}


export default Partners;
