require('dotenv').config();
const OpenAIChatbot = require("./libs/openai");

const apiKey = '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'; // Substitua pela sua própria chave de API do OpenAI
const chatbot = new OpenAIChatbot(apiKey);

// Exemplo de uso do chatbot
const prompt = "Hello world";
chatbot.ask(prompt)
    .then(answer => {
        console.log(answer);
    })
    .catch(error => {
        console.error(error);
    });