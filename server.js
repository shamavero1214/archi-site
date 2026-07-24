import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


const TOKEN = "8658721185:AAGrqR05jF7gED59NzIJs7W3QYJn6z8Opnw";
const CHAT_ID = 841217136;


app.post("/send", async (req, res) => {
    
    console.log("Заявка пришла:", req.body);

  const {
    name,
    contact,
    message
  } = req.body;


  const text = `
🚀 Новая заявка Archi AI

👤 Имя:
${name}

📱 Контакт:
${contact}

💡 Задача:
${message}
`;


  const response = await fetch(
  `https://api.telegram.org/bot${TOKEN}/sendMessage`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  }
);

const result = await response.json();

console.log(result);


  res.json({
    success: true
  });

});


app.listen(3001, () => {
  console.log("Archi сервер запущен 🚀");
});