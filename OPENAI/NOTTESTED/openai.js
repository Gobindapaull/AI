import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// user prompt
const promptMessage = "Top 5 programming languages 2024 ?";


const start = async () => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: promptMessage }],
        model: "gpt-4",
    });
    console.log(chatCompletion)
}

start();

// "dependencies": {
//     "dotenv": "^16.4.5",
//     "openai": "^4.72.0"
//   }
