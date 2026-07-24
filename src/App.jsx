import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
  name: "",
  contact: "",
  message: ""
});


const sendForm = async (e) => {
  e.preventDefault();

  await fetch("https://твой-сервер/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  });


  alert("Заявка отправлена 🚀");


  setForm({
    name:"",
    contact:"",
    message:""
  });
};

  return (
    <div className="page">

      <header className="header">

  <div className="logo">
    Archi <span>AI</span>
  </div>


  <nav className="menu">

    <a href="#services">
      Услуги
    </a>

    <a href="#solutions">
      Решения
    </a>

    <a href="#contact">
      Контакты
    </a>

  </nav>


  <a href="#contact" className="headerBtn">
    Обсудить проект
  </a>

</header>


      <main>

        <section className="hero">

          <div className="badge">
            ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ ДЛЯ БИЗНЕСА
          </div>


          <h1>
            Создаем AI-решения,
            которые работают
          </h1>


          <p>
            Разрабатываем Telegram-боты,
            сайты и автоматизацию процессов
            для компаний.
          </p>
          <div className="heroStats">

  <div>
    <strong>24/7</strong>
    <span>AI работает постоянно</span>
  </div>

  <div>
    <strong>3+</strong>
    <span>направления автоматизации</span>
  </div>

  <div>
    <strong>∞</strong>
    <span>возможности AI</span>
  </div>

</div>


          <button className="mainButton">
            Получить консультацию
          </button>


        </section>


        <section id="services" className="services">

          <h2>
            Наши услуги
          </h2>
          <section className="clients">

  <h2>
    Кому помогает Archi AI
  </h2>

  <p className="sectionText">
    Создаем AI-инструменты для компаний,
    которые хотят экономить время и увеличивать продажи.
  </p>


  <div className="clientCards">


    <div className="clientCard">
      <span>🏢</span>
      <h3>Малый бизнес</h3>
      <p>
        Автоматизация процессов,
        заявки клиентов и цифровые помощники.
      </p>
    </div>


    <div className="clientCard">
      <span>🍕</span>
      <h3>Рестораны</h3>
      <p>
        Боты для заказов, CRM и работа
        с клиентами.
      </p>
    </div>


    <div className="clientCard">
      <span>🛒</span>
      <h3>Продажи</h3>
      <p>
        Увеличиваем скорость обработки
        клиентов.
      </p>
    </div>


  </div>

</section>


          <div className="cards">


            <div className="card">
              <h3>🤖 AI-боты</h3>
              <p>
                Умные помощники для бизнеса,
                клиентов и сотрудников.
              </p>
            </div>


            <div className="card">
              <h3>🌐 Сайты</h3>
              <p>
                Современные сайты,
                которые продают.
              </p>
            </div>


            <div className="card">
              <h3>⚙️ Автоматизация</h3>
              <p>
                Убираем рутину и экономим время.
              </p>
            </div>


          </div>

        </section>


<section id="solutions" className="solutions">

  <h2>
    Наши AI-решения
  </h2>

  <p className="sectionText">
    Создаем инструменты, которые помогают бизнесу
    работать быстрее и эффективнее.
  </p>


  <div className="solutionCards">


    <div className="solutionCard">

      <span>🤖</span>

      <h3>
        AI-ассистенты
      </h3>

      <p>
        Умные помощники для клиентов
        и сотрудников. Отвечают,
        консультируют и помогают продавать.
      </p>

    </div>


    <div className="solutionCard">

      <span>🌐</span>

      <h3>
        Сайты с AI
      </h3>

      <p>
        Современные сайты с формами,
        чатами и автоматической обработкой заявок.
      </p>

    </div>


    <div className="solutionCard">

      <span>⚙️</span>

      <h3>
        Автоматизация
      </h3>

      <p>
        Убираем рутинные задачи:
        заявки, отчёты, обработку данных.
      </p>

    </div>


  </div>

</section>
<section className="cases">

  <h2>
    Наши проекты
  </h2>


  <p className="sectionText">
    Создаем цифровые решения,
    которые помогают бизнесу расти.
  </p>


  <div className="caseCards">


    <div className="caseCard">

      <span>🤖</span>

      <h3>
        AI-консультант
      </h3>

      <p>
        Умный помощник для общения
        с клиентами 24/7.
      </p>

      <div className="tag">
        Telegram AI Bot
      </div>

    </div>



    <div className="caseCard">

      <span>🌐</span>

      <h3>
        Сайт компании
      </h3>

      <p>
        Современный лендинг
        с автоматической обработкой заявок.
      </p>

      <div className="tag">
        Web Development
      </div>

    </div>




    <div className="caseCard">

      <span>⚙️</span>

      <h3>
        Автоматизация бизнеса
      </h3>

      <p>
        Убираем ручную работу
        и ускоряем процессы.
      </p>

      <div className="tag">
        Automation
      </div>

    </div>


  </div>


</section>
<section className="advantages">

  <h2>
    Почему выбирают Archi AI
  </h2>


  <p className="sectionText">
    Мы создаём решения, которые помогают бизнесу
    экономить время и увеличивать эффективность.
  </p>


  <div className="advantageCards">


    <div className="advantage">

      <span>⚡</span>

      <h3>
        Быстрый запуск
      </h3>

      <p>
        Создаём и внедряем AI-решения
        без долгих процессов.
      </p>

    </div>



    <div className="advantage">

      <span>🤖</span>

      <h3>
        AI 24/7
      </h3>

      <p>
        Ваш цифровой помощник работает
        постоянно.
      </p>

    </div>



    <div className="advantage">

      <span>📈</span>

      <h3>
        Рост бизнеса
      </h3>

      <p>
        Автоматизируем процессы
        и помогаем получать больше клиентов.
      </p>

    </div>



    <div className="advantage">

      <span>🔧</span>

      <h3>
        Под ключ
      </h3>

      <p>
        От идеи и разработки
        до запуска и поддержки.
      </p>

    </div>


  </div>

</section>
<section className="process">

  <h2>
    Как мы работаем
  </h2>


  <div className="processCards">


    <div className="processCard">
      <div className="number">
        01
      </div>
      <h3>
    Анализ бизнеса
      </h3>
      <p>
        Изучаем задачи компании и
        находим точки для внедрения AI.
      </p>
    </div>


    <div className="processCard">
      <div className="number">
        02
      </div>
      <h3>
        Создание решения
      </h3>
      <p>
        Разрабатываем сайты, AI-боты и автоматизацию.
      </p>
    </div>


    <div className="processCard">
      <div className="number">
        03
      </div>
      <h3>
        Запуск
      </h3>
      <p>
        Настраиваем систему и
        проверяем работу.
      </p>
    </div>


    <div className="processCard">
      <div className="number">
        04
      </div>
      <h3>
        Поддержка
      </h3>
      <p>
        Улучшаем и развиваем AI-решение.
      </p>
    </div>


  </div>

</section>
<section className="cta">

  <div className="ctaBox">

    <h2>
      Готовы автоматизировать свой бизнес?
    </h2>


    <p>
      Расскажите о своей задаче —
      мы предложим AI-решение под ваш бизнес.
    </p>


    <div className="ctaItems">


      <div>
        <span>🚀</span>
        <p>
          Быстрый старт проекта
        </p>
      </div>


      <div>
        <span>🤖</span>
        <p>
          Современные AI-технологии
        </p>
      </div>


      <div>
        <span>🔒</span>
        <p>
          Поддержка после запуска
        </p>
      </div>


    </div>


    <a href="#contact" className="mainButton">
      Обсудить проект
    </a>


  </div>

</section>
<section id="contact" className="contact">

  <h2>
    Готовы внедрить AI в свой бизнес?
  </h2>

  <p>
    Оставьте заявку — мы предложим решение под ваши задачи.
  </p>


  <form className="contactForm" onSubmit={sendForm}>

    <input
placeholder="Ваше имя"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>


    <input 
      placeholder="Telegram или телефон"
      value={form.contact}
      onChange={(e)=>setForm({...form,contact:e.target.value})}
    />


    <textarea
      placeholder="Расскажите о вашей задаче"
      value={form.message}
      onChange={(e)=>setForm({...form,message:e.target.value})}
    />


    <button type="submit" className="mainButton">
  Получить консультацию
</button>


  </form>


</section>     
      </main>

    <footer className="footer">

  <div className="footerLogo">
    Archi <span>AI</span>
  </div>


  <p>
    Искусственный интеллект для бизнеса
  </p>


  <div className="footerLinks">

    <a href="#services">
      Услуги
    </a>

    <a href="#solutions">
      Решения
    </a>

    <a href="#contact">
      Контакты
    </a>

  </div>


  <div className="footerBottom">

    © 2026 Archi AI. Все права защищены.

  </div>


</footer>
    </div>
  );
}

export default App;